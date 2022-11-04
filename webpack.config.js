const DotenvWebpackPlugin = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    mode: 'development',
    entry: 'index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      clean: true,
    },
    target: 'web',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(s*)css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
          test: /html$/,
          use: 'html-loader',
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: 'file-loader',
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/[name].css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '/public/index.html'),
        //favicon: 'route to file in public folder'
      }),
      new webpack.ProvidePlugin({
        React: 'react',
      }),
      new DotenvWebpackPlugin({
        path: './.env',
      }),
    ],
  };
};
