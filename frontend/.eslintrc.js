module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    'prettier',
    'prettier/vue',
    // 'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'nuxt/no-cjs-in-config': 'off',
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
      }
    }],
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
