const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve("dist"),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|json|xml|ico|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: 'assets/'
            }
          }
        ]
      },
    ],
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    static: path.join('./', 'dist'),
    compress: true,
    port: 8564,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "React App",
      name: 'index.html',
      template: './public/index.html',
    })
  ],
};
