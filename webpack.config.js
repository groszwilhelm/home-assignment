const { join } = require('path')

module.exports = {
  entry: './src/main.ts',
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  devServer: {
    static: {
      directory: join(__dirname, 'src'),
    },
    port: 4200
  },

}