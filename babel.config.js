module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./"],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            screens: "./src/screens",
            components: "./src/components",
            assets: "./src/assets",
            styles: "./src/styles",
            utils: "./src/utils",
          },
        },
      ],
      // "@babel/plugin-transform-modules-commonjs",
      // "@babel/plugin-proposal-class-properties",
      // "@babel/plugin-proposal-object-rest-spread",
      // "@babel/plugin-proposal-optional-chaining",
      // "@babel/plugin-proposal-nullish-coalescing-operator"
    ],
  };
};
