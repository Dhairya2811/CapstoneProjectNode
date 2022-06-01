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
        }
      ]
    }
  };