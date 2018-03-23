module.exports = {
  entry: "./app/script.js",
  output: {
    filename: "bundle.js"
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  },
  mode: "production"
};
