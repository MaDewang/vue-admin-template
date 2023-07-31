module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    VConsole: 'writable'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-control-regex': 0
  }
}
