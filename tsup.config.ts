import { exec } from 'node:child_process';

import { defineConfig } from 'tsup';
import type { Options } from 'tsup';

export default defineConfig(({ env = {} }) => {
  const DEV = env.NODE_ENV === 'development';
  const PROD = env.NODE_ENV === 'production';

  return {
    env,
    entry: ['src/app.ts'],
    format: ['esm'],
    watch: DEV,
    clean: PROD,
    minify: PROD && 'terser',
    define: {
      __DEV__: `${DEV}`,
      __PROD__: `${PROD}`,
    },
    splitting: true,
    publicDir: true,
    platform: 'node',
    target: 'esnext',
    terserOptions: { format: { comments: false } },
    ...(DEV ? createDenoDevRun() : {}),
  };
});

const createDenoDevRun = (): Options => {
  let run = false;
  return {
    onSuccess: async () => {
      if (run) return;
      run = true;
      const e = exec('cd dist && deno run -A --watch main.js');
      e.stdout?.on('data', (x) => process.stdout.write(x.toString()));
      e.stderr?.on('data', (x) => process.stderr.write(x.toString()));
      e.on('exit', (code) => process.exit(typeof code === 'number' ? code : 1));
    },
  };
};
