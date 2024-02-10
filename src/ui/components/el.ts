import type { Tag, CSSProperties, Children } from '~/libs/image';

type Props = { style?: CSSProperties; children?: Children } & { [key: string]: unknown };

const create = <P extends Props>(type: Tag, props: P) => ({ type, props });

const div = <P extends Props>(props: P) => ({ type: 'div', props });
const svg = <P extends Props>(props: P) => ({ type: 'svg', props });

export { create, div, svg };
