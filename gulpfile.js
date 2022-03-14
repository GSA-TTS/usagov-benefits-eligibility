const uswds = require("@uswds/compile")

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.theme = "./assets/styles/theme"
uswds.paths.dist.img = "./assets/img"
uswds.paths.dist.fonts = "./assets/fonts"
uswds.paths.dist.js = "./assets/js"
uswds.paths.dist.css = "./assets/css"
/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init
exports.compile = uswds.compile
exports.watch = uswds.watch
exports.default = uswds.compile
