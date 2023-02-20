const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDevelopment = process.env.NODE_ENV !== 'production';

dotenv.config();

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    publicPath: '/',
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[contenthash].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      'process.env.SERVICE_KEY': JSON.stringify(process.env.SERVICE_KEY),
      'process.env.KAKAO_APP_KEY': JSON.stringify(process.env.KAKAO_APP_KEY),
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      templateParameters: {
        KAKAO_APP_KEY: process.env.KAKAO_APP_KEY,
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
    }),
  ],
};
