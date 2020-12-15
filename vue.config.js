const webpack = require('webpack');
module.exports={
    publicPath: '/',
    assetsDir: 'static',
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
          alias: {
            vendor: '@/export-JS'
          }
        }
      },
}