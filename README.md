# Web application with node.js and express

Building a website with node, express, template and sockets.io

---
### Resource

[Lydna Tutorial](https://www.lynda.com/Express-js-tutorials/What-you-should-know/502310/519123-4.html)

---


## Node js and Express

- Node js is a run time application that uses the same engine as the Chrome browser.

- it lets you build website applications with Javascript on the server side.

- Uses asynchronous event driven model ie when you perform a task node doesn't prevent other things from happening (called non-blocking) which in turn makes it fast

- it makes server requests super fast because the event model doesn't block other things from happening like traditional servers.

- Express.js - adds web server functionality to node.js

- Express creates a routing mechanism so that applications can pass along different requests easily.

- uses GET PUT Delete and allows for the a simple API (application programming inferface)

- Express also allows you to use other modules into into the middle of the framework to perform certain tasks (also known as middleware)


## Simple server nodejs

Node js library is small, you will need to add modules through require statement
2 different types:
  - built in core
  - external files

need to be installed in the node_modules.

external files are loaded relative to current document. A core module is called http. It allows you to work with websites and HTTP requests

In app js -
*the variable will store all the methods and properties and the require statement will import this http library*

1. add:
```Javascript
const http = require('http');
```

2. Use create server method that will let our application handle requests to the server we'll be creating.

create variable myServer that uses a new http object, createsServer and this server will take care of handling requests for data and return info.

pass function that handles request and response

when we receive the request:
 - pass back header info to our client through writeHead, writeHead takes in a code and an object. you don't normally see headers when you visit a webpage. The job of the header is to let the client know what types of files the server will be returning. Server firstly issues a status code (200 is everything is fine) then the type of file to be sent back to the client  (like the head section in a html )
 - to send something back we use the write function.
 - then end the response

```Javascript
const myServer = http.createServer(function(req,res) {
  res.writeHead(200,{"Content-Type": "text/html"});
  res.write('<h1>Roux Meetups</h1>');
  res.end();

});
```

3. ask the server to listen to a specific port

```javascript
myServer.listen(3000);
console.log('go to http://localhost:3000 on your browser');
```

4. terminal run node app/app.js


## Simple server with Express

install Express

```
yarn add express
```

1. require express
2. create an express instance (because most of the functionality is stored instead an express function)

*advantages*
*no need to worry about mime types ie text/html*

```javascript
const express = require('express');
const app = express();
```

3. use HTTP verbs then specific route or location then execute a function of req/res

send a response because express looks after the request for us

```javascript
app.get('/', function(req,res) {
  res.send('<h1>Roux Academy meetups</h1>');
});
```

4. ask the server to listen, which port and a callback to listen


```javascript
const server = app.listen(3000, () => {
  console.log('Listening on port 3000');
})
```

## Express Routing

1. Create Routes folder , index.js, speaker.js

2. move index route to index js and speaker routes to speaker.js

3. need to add app.use to use the routes from the application with require and the route path.

```javascript
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
```
3. index.js require express and express router because we are using the router object of the express library so we can work with external routes.

```javascript
const express = require('express');
const router = express.Router();
```

4. amend app.get to router.get
```javascript
router.get('/', function(req,res) {

  res.send(
    `<h1>Welcome</h1>
    <p>Roux Academy Meetups put together arties from all walks of life</p>
    `);
});
```
4. in index, we need to export the router so app.js can have access to all the routes

```javascript
module.exports = router;
```

repeat steps for speakers - add express, router, module exports and change app to router.

*creating access to data.json file*

5. app.js-  add app.set to have a certain variable available to our entire app.

```javascript
app.set('appData', dataFile);
```

6. speakers.js -
the app info will be available through the request which will have our data.

create a new local variable, look for app info then get this variable appData the data file which is required already in the application(json file)

```javascript
  var dataFile = req.app.get('appData');
```

add it to both routes in speakers
