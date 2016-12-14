var webpack = require('webpack');

module.exports = {
  entry: './docs/src/index.js',
  output: {
    filename: './docs/bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        loader: 'style!css!sass'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
