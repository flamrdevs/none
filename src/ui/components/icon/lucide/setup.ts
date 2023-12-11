import fs from 'node:fs/promises';
import path from 'node:path';

import { kebabCase } from 'string-ts';

import source from './source';

const build = async () => {
  const cwd = process.cwd();
  const icons = path.resolve(cwd, 'lucide', 'icons.ts');
  await fs.access(icons);

  const template: string[] = ['type IconNodeChild = readonly [tag: string, attrs: Record<string, string | number>];'];

  template.push('const icons = {');
  for (const key in source) {
    const icon = source[key as keyof typeof source];
    const children = icon[2];
    if (Array.isArray(children)) {
      template.push(`\t"${kebabCase(key)}": ${JSON.stringify(children)},`);
    }
  }
  template.push('} satisfies Record<string,IconNodeChild[]>;');
  template.push('export default icons;');

  await fs.writeFile(icons, template.join('\n'));
};

build();
