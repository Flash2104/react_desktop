
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
  resolve: {
    // modules: [...],
    fallback: {
      "fs": false,
      "path": require.resolve('path-browserify'),
    } 
  },
};
