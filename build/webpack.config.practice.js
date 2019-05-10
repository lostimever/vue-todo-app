const path = require('path')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const defaultPlugins = [
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

const config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
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
  devServer: {
    port: 8002,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    hot: true
  },
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
})

module.exports = config
