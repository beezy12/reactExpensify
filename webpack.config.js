
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};


// historyApiFallback: true says for all 404 routes, to serve up the index.html. helps with routing for now

//     /\.js$/ -> says Im looking for any file that ends in .js
//     /\.s?css$/  -> says to look for css AND scss files
// - where is the entry point?
// - where to output the final bundle file?
// - read about 'module' at webpack docs
// so, entry -> output -> module
// - **** devtool: 'cheap-module-eval-source-map'  --- this lets you trace errors better. before, react would throw
// an error in bundle.js, but now it tells you the exact file and clicking on it shows you what line.
// also shows console.logs exactly where they are.
// - devServer is my development server. contentBase is asking where the index.html file lives. 
// - 'use' lets you add an array of loaders. for css, the css-loader allows webpack to read a css file in,
// and then dumps it to the DOM into a <style> tag. style-loader creates the <style> tag

//webpack needs the ABSOLUTE PATH for the output below. you can get that by 
// console.logging the dirname, and running it at the CLI with 'node webpack.config.js'.
// outputs: /Users/brianstumbaugh/Documents/beezyWorkspace/react-projects/reactIndecision
//console.log(__dirname);

// this gives the ABSOLUTE PATH to the correct folder of the project. run using Node as stated above
//console.log(path.join(__dirname, 'public'));

// a LOADER lets you tell webpack to do something with a certain kind of file. 
// here, we're going to run all of our .js files through Babel, turning ES6 to ES5, and regular JSX
// to javascript.  and our SCSS to CSS.

