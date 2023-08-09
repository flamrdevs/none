import fs from 'node:fs/promises';
import path from 'node:path';

const target = path.resolve(process.cwd(), 'dist/test.js');

const log = (value) => console.log(`[remove-test]: ${value}`);

try {
  await fs.access(target);
  await fs.rm(target);
  log(`Ok`);
} catch {
  log(`Error`);
}
