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

app.get('/', function(req,res) {
  var info = '';
  dataFile.speakers.forEach(function(item) {
    info += `
      <li>
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
      </li>
    `;
  });
  res.send(
    `<h1>Roux Academy meetups</h1>
    ${info}
    `);
});

const server = app.listen(app.get('port'), () => {
  console.log('Listening on port' + app.get('port'));
});
