
module.exports = {
    entry: './src/index.js',
    mode: "development",
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
          test: /\.scss$/,
          // use:[
          //   MiniCssExtractPlugin.loader,
          //   'css-loader',
          //   'postcss-loader',
          //   {
          //     loader: 'sass-loader',
          //     options: {
          //       implementation: require('node-sass'),
          //     },
          //   },
          // ]
        }
      ]
    }
  };