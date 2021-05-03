const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (options, { mode }) => {

  return {
    entry: './scripts/index.js',
    output: {
      path: path.resolve(__dirname, 'assets'),
      filename: '[name].bundle.js'
      //filename: 'main.bundle.js'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'tz[name].css',
        chunkFilename: 'tz[id].css',
      }),
      new CopyPlugin({
        patterns: [
          { from: 'node_modules/uswds/dist/img', to: 'img' },
          { from: 'node_modules/uswds/dist/fonts', to: 'fonts' }
        ]
      }),
    ],
    resolve: {
      fallback: { "crypto": false }
    },
    optimization: {
      minimize: false
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            mode === 'production'
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            {
              loader: "css-loader",
              options: {
                url: false,
                sourceMap: true
              },
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  sourceMap: true,
                  includePaths: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'node_modules/uswds/dist/scss'),
                    path.resolve(__dirname, 'node_modules/uswds/dist/fonts')
                  ],
                },
              },
            },
          ],
        },
      ],
    },
  };
  
};
