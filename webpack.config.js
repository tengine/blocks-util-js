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
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  performance: {
    hints: false
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  }
};
