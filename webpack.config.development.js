const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./client/index.js",
  output:{
    filename: "bundle.js",
    path: path.join(__dirname,path.resolve('public')),
    publicPath: "/"
  },
  resolve:{
    alias: {
      assets: path.join(__dirname,'./client/assets'),
      layout: path.join(__dirname,'./client/layout'),
      pages: path.join(__dirname,'./client/pages'),
      components: path.join(__dirname,'./client/components'),
      containers: path.join(__dirname,'./client/containers')
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  mode: "development",
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude:  /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.(gif|svg|ttf)$/i,
        use: [
          'url-loader?limit=10000',
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png)$/,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ]
  },
  devServer:{
    contentBase: path.join(__dirname,"public"),
    compress: true,
    port:3000,
    proxy:{
      '/api': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    }),
    new Dotenv({
      path: "./.env"
    })
  ]
}
