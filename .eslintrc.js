module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': [ 'error', 'always-multiline' ],
    'quotes': [ 'error', 'single' ],
    'semi': [ 'error', 'never' ],
    'vue/script-indent': [ 'error', 2, { 'switchCase': 1 } ],
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/eqeqeq': 'error',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
    'vue/comma-dangle': [ 'error', 'always-multiline' ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
