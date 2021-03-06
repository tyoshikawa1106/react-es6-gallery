var webpack = require('webpack')

module.exports = {
  entry: {
    home :'./react/entry/home.js',
    todo :'./react/entry/todo.js',
    comment :'./react/entry/comment.js',
    board :'./react/entry/board.js',
    counter :'./react/entry/counter.js'
  },
  output: {
    path: './react/build',
    filename: '[name].bundle.js',
    publicPath: ''
  },

  // add this handful of plugins that optimize the build
  // when we're in production
  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}