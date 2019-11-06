module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2019,
    },
    extends: [
        'eslint:recommended',
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/recommended',
    ],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        indent: [2, 4, { SwitchCase: 0 }],
        quotes: [2, 'single', 'avoid-escape'],
        'brace-style': [2, '1tbs'],
        'comma-dangle': [2, 'only-multiline'],
        'consistent-return': 2,
        'linebreak-style': [2, 'unix'],
        semi: [2, 'always'],
        'no-console': 0,
        'no-undef': 2,
        'no-shadow': 0,
        'vue/no-v-html': 0,
        'vue/no-use-v-if-with-v-for': 0,
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4],
        'no-unused-vars': 2,
        'no-bitwise': 2,
        'eol-last': 2,
        'dot-notation': 2,
        'dot-location': [2, 'property'],
        eqeqeq: [2, 'allow-null'],
        'no-inner-declarations': [2, 'functions'],
        'no-multi-spaces': 2,
        'no-unused-expressions': 2,
        'keyword-spacing': 2,
        'space-before-blocks': 2,
        'require-atomic-updates': 'off',
        'space-before-function-paren': [
            2,
            { anonymous: 'never', named: 'never' },
        ],
        strict: [2, 'global'],
    },
};
