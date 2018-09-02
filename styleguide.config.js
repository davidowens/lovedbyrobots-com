const path = require('path');

module.exports = {
  styleguideDir: 'build/styleguide',
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/styles/ThemeWrapper'),
  },

  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig.output = {
      ...webpackConfig.output,
      filename: '../styleguide/bundle.[chunkhash:8].js',
      chunkFilename: '../styleguide/[name].[chunkhash:8].js',
    };
    return webpackConfig
  }
}
