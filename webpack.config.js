const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = function (env, argv) {
  const outputs = [
    {
      libraryTarget: "umd",
      globalObject: "this",
    },
    {
      libraryTarget: "var",
      globalObject: "window",
    },
  ];

  const isProduction = argv.mode === /prod(uction)?/;
  
  return outputs.map(({globalObject, libraryTarget}) => ({
    mode: isProduction ? 'production' : 'development',
    context: path.resolve(__dirname),
    entry: "./src/index.ts",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: `index.${libraryTarget}.js`,
      library: "hansifyNumbers",
      libraryTarget,
      libraryExport: "default",
      globalObject,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },

    module: {
      rules: [
        {
          test: /\.m?[j|t]s$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", 
                "@babel/preset-typescript"
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({ 
        cleanOnceBeforeBuildPatterns: [], 
      }),
    ],
    devtool: isProduction ? "" : "source-map",
  }));
};