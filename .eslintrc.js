module.exports = {
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential'
    ],
    // add your custom rules here
    rules: {
        "space-before-function-paren": ["error", "always"],
        // allow async-await
        'generator-star-spacing': 'off'
    }
}