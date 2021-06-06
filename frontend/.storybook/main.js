const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-a11y/register',
    '@storybook/preset-create-react-app',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src'),
    ];

    return config;
  },
};
