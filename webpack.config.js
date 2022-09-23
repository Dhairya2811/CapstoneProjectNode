const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    entry: './src/index.js',
    mode: "development",
    target: "node",
    output: {
      path: __dirname + '/public',
      filename: 'bundle.js'

    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
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