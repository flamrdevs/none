import type { Tag, CSSProperties, Children } from '~/libs/image';

const el = <P extends { style?: CSSProperties; children?: Children } & { [key: string]: unknown }>(type: Tag, props: P) => ({ type, props });

export default el;
