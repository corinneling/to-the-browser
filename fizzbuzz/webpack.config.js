module.exports = {
  entry: "./src/script.js",
  output: {
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  },
  mode: "development"
};
