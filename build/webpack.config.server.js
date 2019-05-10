const path = require('path')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueServerPlugin = require('vue-server-renderer/server-plugin')

const defaultPlugins = [
  new MiniCssExtractPlugin('styles.[contentHash:8].css'),
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.VUE_ENV': '"server"'
  }),
  new VueServerPlugin(),
  new HTMLPlugin({
    // template: path.join(__dirname, 'template.html')
  })
]

const config = merge(baseConfig, {
  target: 'node',
  entry: path.join(__dirname, '../client/server.entry.js'),
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entery.js',
    path: path.join(__dirname, '../server-build')
  },
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.styl/,
        use: [
          // MiniCssExtractPlugin.loader,
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  // devServer: {
  //   port: 8002,
  //   host: '0.0.0.0',
  //   overlay: {
  //     errors: true
  //   },
  //   hot: true
  // },
  plugins: defaultPlugins
  // .concat([
  //   new webpack.HotModuleReplacementPlugin()
  // ])
})

module.exports = config
