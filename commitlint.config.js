module.exports = {
  extends: ['@commitlint/config-conventional'],
  ignores: [message => message.startsWith('wip')],
  rules: {
    'footer-max-line-length': [0, 'always'],
  },
};
