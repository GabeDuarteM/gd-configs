<div align="center">
  <h1>gd-configs</h1>

  <p>Package with my personal configs for various projects</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![downloads][downloads-badge]][npmtrends]
[![MIT License][license-badge]][license]

[![PRs Welcome][prs-badge]][prs]
[![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Installation

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `devDependencies`:

```bash
npm install --save-dev gd-configs
```

## The problem

I have some open source projects which share most of the same config for building, linting, etc, so I have to practically copy/paste the same files over and over again. It's even worse when I want to add a new config, like a new eslint rule or something like that, because I have to go over all the repos and change the config there.

## This solution

With this package, I group all of my most common configs for my projects, and on the projects which needs the configs, I just `require` this package, so I don't have to copy/paste the same configs over and over, and staying up-to-date with changes is a breeze, as I just have to add the new config on this package, and then install the updated version where is needed.

## Usage

### .eslintrc.js

The config you need to require depends on the type of the project, so you need to export one of the following on your `.eslintrc.js` file:

```js
module.exports = require('gd-configs/eslint')
module.exports = require('gd-configs/eslint/web')
module.exports = require('gd-configs/eslint/ts')
module.exports = require('gd-configs/eslint/ts/web')
```

### .prettierrc.js

```js
module.exports = require('gd-configs/prettier')
```

### tsconfig.json

For node projects:

```json
{
  "extends": "./node_modules/gd-configs/typescript/base.json"
}
```

For web projects:

```json
{
  "extends": "./node_modules/gd-configs/typescript/web.json"
}
```

### release.config.js

For `semantic-release` configs, add the following:

```js
module.exports = require('gd-configs/semantic-release')
```

## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/com/GabrielDuarteM/gd-configs/master.svg?style=flat-square
[build]: https://travis-ci.com/GabrielDuarteM/gd-configs
[coverage-badge]: https://img.shields.io/codecov/c/github/GabrielDuarteM/gd-configs.svg?style=flat-square
[coverage]: https://codecov.io/github/GabrielDuarteM/gd-configs
[version-badge]: https://img.shields.io/npm/v/gd-configs.svg?style=flat-square
[package]: https://www.npmjs.com/package/gd-configs
[downloads-badge]: https://img.shields.io/npm/dm/gd-configs.svg?style=flat-square
[npmtrends]: http://www.npmtrends.com/gd-configs
[license-badge]: https://img.shields.io/github/license/GabrielDuarteM/gd-configs.svg?style=flat-square
[license]: https://github.com/GabrielDuarteM/gd-configs/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/GabrielDuarteM/gd-configs/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/GabrielDuarteM/gd-configs.svg?style=social
[github-watch]: https://github.com/GabrielDuarteM/gd-configs/watchers
[github-star-badge]: https://img.shields.io/github/stars/GabrielDuarteM/gd-configs.svg?style=social
[github-star]: https://github.com/GabrielDuarteM/gd-configs/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20gd-configs%20by%20%40GabrielDuarteM%20https%3A%2F%2Fgithub.com%2FGabrielDuarteM%2Fgd-configs%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/GabrielDuarteM/gd-configs.svg?style=social
