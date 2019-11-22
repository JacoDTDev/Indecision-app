console.log(__dirname);


module.exports = {
  entry:'./src/app.js',
    output: {
        path: "C:\\Users\\datatim\\Desktop\\meteor-projects\\Indecision-app\\public",
        filename: "bundle.js"
    },
    module:{
      rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude:/node_modules/
      }]
    }
};
