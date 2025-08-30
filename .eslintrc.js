module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'no-unused-vars': 'error',

    'no-console': ['error', { allow: ['warn', 'error'] }],

    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme'], location: 'anywhere' },
    ],
  },
};
