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

  res.send(
    `<h1>Welcome</h1>
    <p>Roux Academy Meetups put together arties from all walks of life</p>
    `);
});



app.get('/speakers', function(req,res) {
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

app.get('/speakers/:speakerid', function(req,res) {

  var speaker = dataFile.speakers[req.params.speakerid];
  res.send(
    `<h1>${speaker.title}</h1>
    <h2>${speaker.name}</h2>
    <p>${speaker.summary}</p>
    `);
});

const server = app.listen(app.get('port'), () => {
  console.log('Listening on port' + app.get('port'));
});
