//simple server with nodejs

// const http = require('http');
//
// const myServer = http.createServer(function(req,res) {
//   res.writeHead(200,{"Content-Type": "text/html"});
//   res.write('<h1>Roux Meetups</h1>');
//   res.end();
//
// });
//
// myServer.listen(3000);
// console.log('go to http://localhost:3000 on your browser');


//simple server with express

const express = require('express');
const app = express();

app.get('/', function(req,res) {
  res.send('<h1>Roux Academy meetups</h1>');
});

const server = app.listen(3000, () => {
  console.log('Listening on port 3000');
})
