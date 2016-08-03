const querystring = require('querystring');
const express = require('express');
const http = require('http');
const httpProxy = require('http-proxy');
  
var port = process.env.PORT || 3000;
var isProduction = process.env.NODE_ENV === 'production';
console.log('env is prod =', isProduction);

if (isProduction) { // prod :
  // Init express server
  var app = this.app = new express();

  app.use(express.static(__dirname + '/')); 

  //for react router, we redirect on index.html
  app.get('*', function (request, response){
    response.sendFile(__dirname+'/index.html');
  })

  app.listen(port);
  console.log(`Listening at http://localhost:${port}`)

} else { // dev :

  var webpack = require('webpack');
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(port, function (err, result) {
    if (err) {
      return console.log(err);
    }

    console.log('Listening at http://localhost:' + port + '/');
  });

}

