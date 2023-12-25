import fs from 'node:fs/promises';
import path from 'node:path';

const files = ['test.js'];

const scope = `[clean]`;

try {
  const cwd = process.cwd();
  const del = async (file) => {
    const target = path.resolve(cwd, 'dist', file);
    await fs.access(target);
    await fs.rm(target);
  };

  await Promise.all(files.map((file) => del(file)));

  console.log(`${scope}: Ok`);
} catch (error) {
  console.log(`${scope}: ${error instanceof Error ? error.message : 'Error'}`);
}
