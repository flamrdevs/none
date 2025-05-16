import fs from 'node:fs/promises';
import path from 'node:path';

import { kebabCase } from 'string-ts';

import source from './source.ts';

const build = async () => {
  const cwd = process.cwd();
  const icons = path.resolve(cwd, 'lucide', 'icons.ts');
  await fs.access(icons);

  const template: string[] = [];

  template.push('const icons = {');
  for (const key in source) {
    template.push(`\t"${kebabCase(key)}": ${JSON.stringify(source[key as keyof typeof source])},`);
  }
  template.push('} satisfies Record<string, (readonly [tag: string, attrs: Record<string, string | number>])[]>;');
  template.push('export default icons;');

  await fs.writeFile(icons, template.join('\n'));
};

build();
