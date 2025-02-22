const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './css-library/src/main.css',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'css-library.min.js', // File JS không cần thiết nhưng Webpack yêu cầu
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css-library.min.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('postcss-preset-env')({
                    autoprefixer: { grid: true }
                  }),
                  require('cssnano')({
                    preset: 'default',
                  })
                ]
              }
            }
          }
        ]
      }
    ]
  }
}; 