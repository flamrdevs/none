declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production';
    }
  }

  var __DEV__: boolean;
  var __PROD__: boolean;
}

export {};
