module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module"
  },
  "rules": {
    "no-console": "error"
  }
}