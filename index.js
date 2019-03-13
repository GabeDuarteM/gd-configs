#!/usr/bin/env node
const base = [
  'prettier',
  'eslint',
  'eslint-config-prettier',
  'eslint-plugin-prettier',
  'eslint-plugin-babel',
  'eslint-plugin-import',
]

const web = [
  'eslint-plugin-react',
  'eslint-plugin-jsx-a11y',
  'eslint-plugin-react-hooks',
]

const typescript = [
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin',
]

const node = ['babel-eslint']

const message = `
install eslint:

base: ${base.join(' ')}
web: ${web.join(' ')}
ts: ${typescript.join(' ')}
node: ${node.join(' ')}
`

console.log(message)
