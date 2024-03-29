const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    console.log("Webpack !! Learning: " + path.resolve(__dirname, '../'));
    config.module.rules.push({
      test: /\.s[ac]ss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: "sass-loader",
        options: {
          // Prefer `dart-sass`
          implementation: require("node-sass")}
        }],
      include: path.resolve(__dirname, '../stories/'),
    });
    config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }))
    // Return the altered config
    return config;
  }
}