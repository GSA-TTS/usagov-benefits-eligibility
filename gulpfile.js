// gh-docs: https://github.com/uswds/uswds-compile
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

exports.init = uswds.init // Initialize the theme
// exports.compile = uswds.compile // Compile the theme
// exports.watch = uswds.watch // Don't think we need since webpack is watching
exports.default = uswds.copyAssets // fonts not loading for prod?
exports.update = uswds.updateUswds // keep up with latest uswds
