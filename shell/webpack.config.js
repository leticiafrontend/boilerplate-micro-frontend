const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin
const path = require('path')
const deps = require('./package.json').dependencies

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    port: 3001,
    hot: true,
    open: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        content: 'content@http://localhost:3002/remoteEntry.js'
      },
      shared: {
        ...deps,
        react: {
          eager: true,
          singleton: true,
          requiredVersion: deps.react
        },
        'react-dom': {
          eager: true,
          singleton: true,
          requiredVersion: deps['react-dom']
        },
        'styled-components': {
          singleton: true
        },
        'styled-icons': {
          singleton: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}
