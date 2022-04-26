
module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./app/electron/main.ts",
  target: 'electron-main',
  // // Put your normal webpack config below here
  module: {
    rules: require("./webpack.rules")
  },
  // resolve: {
  //   modules: ["node_modules", path.resolve(__dirname)],
  //   modules: ["menu", path.resolve(__dirname, "app", "electron", "menu")],
  //   extensions: [".js", ".ts"],
  //   alias: {
  //     "menu": path.resolve(__dirname, "app", "electron", "menu")
  //   }
  // }
};
