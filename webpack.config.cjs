const path = require("path");
module.exports = {
  entry: "./index.js",
  output: {
    filename: "math.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "module"
    }
  },
  experiments: {
    outputModule: true,
  },
};
