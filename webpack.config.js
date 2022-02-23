const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    bundle: ['./src/index'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  devServer: {
    open: true,
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          compact: true,
          minified: true,
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  esmodules: true,
                },
              },
            ],
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
