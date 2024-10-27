// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    extends: ['expo', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'error',
        'no-const-assign': 'error',
        'no-empty': 'error',
        'no-empty-function': 'error',
        'newline-before-return': 'error',
    },
};
