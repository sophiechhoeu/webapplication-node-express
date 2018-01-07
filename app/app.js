const http = require('http');

const myServer = http.createServer(function(req,res) {
  res.writeHead(200,{"Content-Type": "text/plain"});
  res.write('Roux Meetups');
  res.end();

});

myServer.listen(3000);
