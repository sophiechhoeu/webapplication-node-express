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
const dataFile = require('./data/data.json');


app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));




const server = app.listen(app.get('port'), () => {
  console.log('Listening on port' + app.get('port'));
});
