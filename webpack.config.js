const { join, resolve } = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './src/main.ts',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts?$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
  ],

  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@custom': resolve(__dirname, "src/shared/models")
    },
  },

  devServer: {
    static: {
      directory: join(__dirname, 'src'),
    },
    port: 4200
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}