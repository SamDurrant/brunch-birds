const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminSvgo = require('imagemin-svgo');
const ImageminMozjpeg = require('imagemin-mozjpeg');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].bundle.css'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: './src/images/',
      to: path.resolve(__dirname, 'dist/images')
    }]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      ImageminSvgo: ({quality: '50-70'}),
      plugins: [ImageminMozjpeg({quality: 60})]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  }
})