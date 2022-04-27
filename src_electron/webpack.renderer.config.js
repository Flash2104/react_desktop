module.exports = {
    // Put your normal webpack config below here
    target: ['web', 'electron-renderer'],
    resolve: {
      extensions: [".js", ".ts", ".tsx"],
      alias: { "react-dom": "react-dom" },
    },
    module: {
      rules: require("./webpack.rules"),
    },
  };