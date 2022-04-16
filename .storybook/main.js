module.exports = {
  stories: [
    "../src/components/**/stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  features: {
    interactionsDebugger: true,
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
}
