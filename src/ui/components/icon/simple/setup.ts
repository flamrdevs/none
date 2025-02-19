import fs from 'node:fs/promises';
import path from 'node:path';

import { kebabCase } from 'string-ts';

import source from './source';

const build = async () => {
  const cwd = process.cwd();
  const icons = path.resolve(cwd, 'simple', 'icons.ts');
  await fs.access(icons);

  const template: string[] = [];

  template.push('const icons = {');
  for (const { slug, path } of source) {
    template.push(`\t"${kebabCase(slug)}": "${path}",`);
  }
  template.push('} satisfies Record<string, string>;');
  template.push('export default icons;');

  await fs.writeFile(icons, template.join('\n'));
};

build();
