const path = require('path')
const baseConfig = require('./webpack.config.base')
const merge = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueClientPlugin = require('vue-server-renderer/client-plugin')

const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new HTMLPlugin({
    filename: 'index.html',
    template: path.join(__dirname, 'template.html'),
    inject: true
  }),
  new VueClientPlugin()
]

let config

if (isDev) {
  config = merge(baseConfig, {
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
      port: 8001,
      host: '0.0.0.0',
      overlay: {
        errors: true
      },
      headers: { 'Accesss-Cotrol-Allow-Origin': '*' },
      // autoOpenBrowser: true,
      // assetsSubDirectory: 'static',
      historyApiFallback: {
        index: '/public/index.html'
      },
      hot: true,
      proxy: {
        '/api/*': 'http://localhost:8002',
        '/user/*': 'http://localhost:8002'
      }
    },
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin()
      // new webpack.NoEmitOnErrorsPlugin()
    ]),
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, '../client/client-entry.js')
      // vendor: ['vue']
    },
    output: {
      filename: '[name].[chunkhash:8].js',
      publicPath: '/public/'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            MiniCssExtractPlugin.loader,
            // 'vue-style-loader',
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
    optimization: {
      splitChunks: {
        cacheGroups: {
          chunks: 'all'
          // commons: {
          //   chunks: 'all',
          //   minChunks: 2,
          //   maxInitialRequests: 5,
          //   minSize: 0
          // }
          // vendor: {
          //   test: /node_modules/,
          //   chunks: 'initial',
          //   name: 'vendor',
          //   priority: 10,
          //   enforce: true
          // }
        }
      },
      runtimeChunk: true
    },
    plugins: defaultPlugins.concat([
      new MiniCssExtractPlugin('styles.[contentHash:8].css')
    ])
  })
}

module.exports = config
