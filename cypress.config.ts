import { defineConfig } from 'cypress';
import path from 'path';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('@cypress/code-coverage/task')(on, config);

      return config;
    },
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
      webpackConfig: {
        resolve: {
          alias: {
            '@ui': path.resolve(__dirname, 'src/ui'),
            '@app': path.resolve(__dirname, 'src/app'),
            '@data': path.resolve(__dirname, 'src/data'),
            '@domain': path.resolve(__dirname, 'src/domain'),
            '@infra': path.resolve(__dirname, 'src/infra'),
            '@e2e': path.resolve(__dirname, 'src/e2e'),
            '@utils': path.resolve(__dirname, 'src/utils'),
          },
        },
        devServer: {
          port: 3001,
        },
        mode: 'development',
        devtool: false,
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                  plugins: ['istanbul', ['@babel/plugin-transform-modules-commonjs', { loose: true }]],
                },
              },
            },
          ],
        },
      },
    },
  },
});
