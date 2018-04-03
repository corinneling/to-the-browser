module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js"
    },
    devtool: "source-map",
    devServer: {
      contentBase: "./public"
    },
    mode: "development"
  };