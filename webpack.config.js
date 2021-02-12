const path = require('path')
const Dotenv = require('dotenv-webpack')

var nodeExternals = require('webpack-node-externals')

exports.default = {
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [new Dotenv()],
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  }
}
