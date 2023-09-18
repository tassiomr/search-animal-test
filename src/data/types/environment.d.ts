export declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      APP_VERSION: string;
    }
  }
}
