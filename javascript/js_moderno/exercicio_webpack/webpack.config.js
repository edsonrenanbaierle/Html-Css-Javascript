const babelLoader = require('babel-loader')
const path = require('path')
module.exports = {
  entry:{
    build: "./src/build.js"
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },{
      test: /\.js$/,
      use: ['babel-loader']
    }]
  }
}