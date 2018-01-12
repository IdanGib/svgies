module.exports = {
  entry: './app.js',
  
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    open: 'firefox'

  }

}
