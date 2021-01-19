const path = require('path');

module.exports = {
  mode: "production",
  context: path.resolve(__dirname),
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'cinmaan',
    libraryTarget: 'umd',
    globalObject: 'this',
    // TODO： check out this key https://webpack.js.org/configuration/output/#outputlibrarytarget
    libraryExport: 'default' 
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
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
              '@babel/preset-env', 
              "@babel/preset-typescript"
            ]
          }
        }
      },
      // {
      //   test: /\.tsx?$/,
      //   loader: 'ts-loader'
      // }
    ]
  },
  devtool: 'source-map'
};

// TODO: add sourcemap
// TODO: add libraryTarget: var
