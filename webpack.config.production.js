const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve:{
    alias: {
      assets: path.join(__dirname,'./client/assets'),
      components: path.join(__dirname,'./client/components'),
      containers: path.join(__dirname,'./client/containers'),
      modules: path.join(__dirname, './client/modules'),
      utils: path.join(__dirname,'./client/utils'),
      pages: path.join(__dirname,'./client/pages'),
      layout: path.join(__dirname,'./client/layout'),
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use:
          "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
               limit: 8192,
               name: "images/[name].[ext]"
            }
          },
        ],
        include: [
          path.resolve(__dirname, './client/assets/fonts'),
          path.resolve(__dirname, './client/assets/styles'),
          path.resolve(__dirname, './client/assets/images'),
          path.resolve(__dirname, './client/assets'),
          path.resolve(__dirname, './')
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
