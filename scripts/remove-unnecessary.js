import fs from 'node:fs/promises';
import path from 'node:path';

const files = ['deno.json', 'deno.lock', 'import_map.json', 'test.js'];

const log = (value) => console.log(`[remove-unnecessary]: ${value}`);

try {
  for await (const file of files) {
    const target = path.resolve(process.cwd(), 'dist', file);
    await fs.access(target);
    await fs.rm(target);
  }

  log(`Ok`);
} catch {
  log(`Error`);
}
