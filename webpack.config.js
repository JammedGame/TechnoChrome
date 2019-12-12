var path = require("path");
module.exports =
{
  mode: "development",
  entry:
  {
    app: ["./Code/App.ts"]
  },
  optimization:
  {
    sideEffects: false
  },
  output:
  {
    path: path.resolve(__dirname, "build"),
    filename: "tc.js",
    publicPath: "/Resources/"
  },
  resolve:
  {
    extensions: ['.ts', '.tsx', '.js']
  },
  module:
  {
    rules:
    [
      {test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader'}
    ]
  }
}