var webpack = require('webpack');
var config = require('./webpack.config.js');

config.optimization = {
  minimize: true
};

module.exports = config;
