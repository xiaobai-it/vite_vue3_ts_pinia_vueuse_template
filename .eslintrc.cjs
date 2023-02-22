module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },

    // 扩展配置
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],

    plugins: ['prettier'],

    rules: {
        // 自定义规则,也可以对许多eslint的内置规则，进行禁用
        'prettier/prettier': 'error',
    },
};
