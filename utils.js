// @ts-check
const readPkgUp = require('read-pkg-up')
const fs = require('fs')
const arrify = require('arrify')
const has = require('lodash.has')
const { join, dirname } = require('path')

const { pkg, path: pkgPath } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
})
const appDirectory = dirname(pkgPath)

/**
 * @param {string[]} p
 */
const fromRoot = (...p) => join(appDirectory, ...p)

/**
 * @param {string[]} p
 */
const hasFile = (...p) => fs.existsSync(fromRoot(...p))

/**
 * @param {any} props
 */
const hasPkgProp = (props) => arrify(props).some((prop) => has(pkg, prop))

module.exports = {
  pkg,
  hasFile,
  hasPkgProp,
}
