var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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
      new HtmlWebpackPlugin({
        template: path.resolve('./public/index.html'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
          options: {compact: false}
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