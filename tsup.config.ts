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
    splitting: true,
    publicDir: true,
    platform: 'node',
    target: 'deno1.35',
    external: createNodeExternal(),
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

const createNodeExternal = () => {
  const modules = [
    'assert',
    'async_hooks',
    'buffer',
    'child_process',
    'cluster',
    'console',
    'constants',
    'crypto',
    'dgram',
    'diagnostics_channel',
    'dns',
    'domain',
    'events',
    'fs',
    'http',
    'http2',
    'https',
    'inspector',
    'module',
    'net',
    'os',
    'path',
    'perf_hooks',
    'process',
    'punycode',
    'querystring',
    'readline',
    'repl',
    'stream',
    'string_decoder',
    'test',
    'timers',
    'tls',
    'trace_events',
    'tty',
    'url',
    'util',
    'v8',
    'vm',
    'wasi',
    'worker_threads',
    'zlib',
  ];

  return modules.concat(modules.map((x) => `node:${x}`));
};
