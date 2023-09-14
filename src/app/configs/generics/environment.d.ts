export declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      npm_package_version: string;
    }
  }
}
