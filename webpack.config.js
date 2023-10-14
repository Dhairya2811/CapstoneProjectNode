const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    target: "node",
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'
    },
    devServer: {
      hot: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use:[
            "file-loader",
            {
              loader: 'image-webpack-loader',
              options:{
                bypassOnDebug: true,
                disable: true,
              }
            }
          ]
        }
      ]
    }
  };