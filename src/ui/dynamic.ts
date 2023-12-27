const components = {
  core: () => import('./components/core'),
  icon: {
    lucide: () => import('./components/icon/lucide'),
    simple: () => import('./components/icon/simple'),
  },
};

const utils = () => import('./utils');

export { components, utils };
