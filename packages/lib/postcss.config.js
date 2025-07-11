const path = require('path')

const sassPlugin = require('@csstools/postcss-sass')
const assetsUrlPlugin = require('postcss-url')

const config = {
  plugins: [
    sassPlugin({
      style: 'expanded',
      sourceMap: true,
    }),
    assetsUrlPlugin({
      url: 'copy',
      // base path to search assets from
      basePath: path.resolve(__dirname, 'assets'),
      // dir to copy assets
      assetsPath: 'assets',
      // using hash names for assets (generates from asset content)
    }),
  ],
  syntax: 'postcss-scss',
  map: { annotation: true },
}

module.exports = config
