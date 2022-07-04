const { defineConfig } = require('@vue/cli-service')
const fixEmitDeclarationFilesForTypeScript = {
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.module.rule('ts').uses.delete('cache-loader');
      config.module
        .rule('ts')
        .use('ts-loader')
        .loader('ts-loader')
        .tap((options) => ({
          ...options,
          transpileOnly: false,
          happyPackMode: false,
        }));
    }
  },
  parallel: false,
};

module.exports = defineConfig({
  transpileDependencies: true,
  ...fixEmitDeclarationFilesForTypeScript
})
