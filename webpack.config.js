const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebappWebpackPlugin = require('favicons-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

const apiRoot = function (env) {
  if (env === 'production') {
    return 'https://mixin-api.zeromesh.net';
  } else {
    return 'https://mixin-api.zeromesh.net';
  }
};

const blazeRoot = function (env) {
  if (env === 'production') {
    return 'wss://mixin-blaze.zeromesh.net';
  } else {
    return 'wss://mixin-blaze.zeromesh.net';
  }
};

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    publicPath: process.env.NODE_ENV === 'github' ? '/mixin.one/assets/' : '/assets/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js'
  },

  resolve: {
    alias: {
      jquery: "jquery/dist/jquery",
      handlebars: "handlebars/dist/handlebars.runtime"
    }
  },

  module: {
    rules: [{
      test: /\.html$/,
      use: ["handlebars-loader?helperDirs[]=" + __dirname + "/src/helpers"]
    }, {
      test: /\.(scss|css)$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            esModule: true
          },
        },
        'css-loader',
        'sass-loader',
      ]
    }, {
      test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)$/,
      type: 'asset/resource',
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: (process.env.NODE_ENV === 'production'),
      API_ROOT: JSON.stringify(apiRoot(process.env.NODE_ENV)),
      BLAZE_ROOT: JSON.stringify(blazeRoot(process.env.NODE_ENV)),
      APP_NAME: JSON.stringify('Mixin')
    }),
    new HtmlWebpackPlugin({
      template: './src/layout.html',
      templateParameters: (compilation, assets, tags, options) => {
        tags.headTags.forEach((tag) => {
          if (tag.tagName === 'script') {
            tag.attributes.async = true;
          }
        });
        return {
          htmlWebpackPlugin: { options }
        }
      },
    }),
    new WebappWebpackPlugin({
      logo: './src/launcher.png',
      prefix: 'icons/'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name]-[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id]-[hash].css',
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"]
    })
  ]
};
