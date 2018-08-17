const HTMLWebpackPlugin = require('html-webpack-plugin')
const PrettierWebpackPlugin = require('prettier-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          'file-loader',
        ],
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new PrettierWebpackPlugin({
      parser: 'babylon',
      semi: false,
      singleQuote: true,
      trailingComma: 'all',
      extensions: ['.js', '.jsx'],
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
}