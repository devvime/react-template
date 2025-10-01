const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: 'development',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'), // teu template
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, 'public/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@functions': path.resolve(__dirname, 'src/functions/'),
      '@sass': path.resolve(__dirname, 'src/sass/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@shared': path.resolve(__dirname, 'src/shared/')
    },
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: false,
    hot: true,
    compress: true,
    historyApiFallback: true
  }
};
