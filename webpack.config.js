const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  name: 'layer-hotkeys',
  entry: {
    index: path.resolve(__dirname, 'src/scripts/index.ts')
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: 'modules/layer-hotkeys/scripts/',
    filename: 'index.js',
    chunkFilename: 'bundles/[name].[chunkhash:4].js',
    path: path.resolve(__dirname, 'dist/scripts/'),
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};