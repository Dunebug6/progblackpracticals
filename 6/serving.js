var express = require('express');
var app = express();

var recipes = require('./potato_recipes.json');

app.get('/potato', function (req, resp) {
  const search = req.query.search;
  let results = [];

  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
    if (recipe.title.includes(search)) {
      results.push(recipe.title);
    }
  }
  resp.send(results);
});

app.listen(8090);
