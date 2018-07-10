'use strict'
let folder = process.argv[process.argv.length - 1]
const utils = require('./utils')
const config = require(`../${folder}/config`)
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: [folder, 'poster'],
    source: folder,
    img: folder,
    image: 'xlink:href'
  }
}
