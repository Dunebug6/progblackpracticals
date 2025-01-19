var express = require('express');
var app = express();

app.get('/', function (req, resp) {
  resp.send('Hello world');
});

app.get('/wave/:person', function (req, resp) {
  const person = req.params.person;
  resp.send('waving at ' + person);
});

app.get('/w', function (req, resp) {
  const person = req.query.person;
  resp.send('waving at ' + person);
});

app.listen(8090);
