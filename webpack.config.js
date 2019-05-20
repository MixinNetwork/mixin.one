const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const WebappWebpackPlugin = require('webapp-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name]-[hash].css"
});

const webRoot = function (env) {
  if (env === 'production') {
    return 'https://mixin.one';
  } else {
    return 'http://mixin.local';
  }
};

const apiRoot = function (env) {
  if (env === 'production') {
    return 'https://api.mixin.one';
  } else {
    return 'https://api.mixin.one';
  }
};

const blazeRoot = function (env) {
  if (env === 'production') {
    return 'wss://blaze.mixin.one';
  } else {
    return 'wss://blaze.mixin.one';
  }
};

module.exports = {
  entry: {
    app: './src/app.js'
  },

  output: {
    publicPath: '/assets/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[chunkHash].js'
  },

  resolve: {
    alias: {
      jquery: "jquery/dist/jquery",
      handlebars: "handlebars/dist/handlebars.runtime"
    }
  },

  module: {
    rules: [{
      test: /\.html$/, loader: "handlebars-loader?helperDirs[]=" + __dirname + "/src/helpers"
    }, {
      test: /\.(scss|css)$/,
      use: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    }, {
      test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: (process.env.NODE_ENV === 'production'),
      WEB_ROOT: JSON.stringify(webRoot(process.env.NODE_ENV)),
      API_ROOT: JSON.stringify(apiRoot(process.env.NODE_ENV)),
      BLAZE_ROOT: JSON.stringify(blazeRoot(process.env.NODE_ENV)),
      APP_NAME: JSON.stringify('Mixin')
    }),
    new CompressionPlugin({
      filename: "[path]",
      algorithm: "gzip",
      test: /\.(js|css)$/,
      threshold: process.env.NODE_ENV === 'production' ? 0 : 100000000000000,
      minRatio: 1,
      deleteOriginalAssets: false
    }),
    new HtmlWebpackPlugin({
      template: './src/layout.html'
    }),
    new WebappWebpackPlugin({
      logo: './src/launcher.png',
      prefix: 'icons-[hash]-',
      background: '#FFFFFF'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    extractSass
  ]
};
