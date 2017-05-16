var path = require('path');
var webpack = require('webpack');
var postCSSConfig = require('./postcss.config.js');
module.exports = {
  devtool: 'source-map',
  entry: [
    // 'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.LoaderOptionsPlugin({
             test: /\.css$/, // may apply this only for some modules
             options: {
              postcss: function() {
                return postCSSConfig;
              }
             }
           })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss-loader',
    }]
  }
};