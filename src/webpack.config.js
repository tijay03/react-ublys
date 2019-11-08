module.exports = {
    entry: './index.js',
  
    output: {
      filename: 'index.js',
      publicPath: '/'
    },
    devServer:{
      historyApiFallback: true
    },
    module: {
      loaders: [
        { test: /\.js$/, exclude: /node_components/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
      ]
    }
  }