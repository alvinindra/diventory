module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 0,
    'vue/html-indent': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/html-closing-bracket-newline': 'off',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
}
