var path = require('path');

module.exports = {
   entry: {
      app: './src/ex1.js'
   },
   output: {
      path: path.resolve(__dirname, 'dev'),
      filename: 'main_bundle.js'
   },
   mode:'development',
   module: {
      rules: [
         {
            test:/\.(js)$/,
            include: path.resolve(__dirname, 'src'),
            loader: 'babel-loader',
            options: {
               presets: ['@babel/preset-env']
            }
         }
      ]
   }
};