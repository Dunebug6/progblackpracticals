const express = require('express');
let app = express();

let recipes = require('./potato_recipes.json');
app.use(express.urlencoded({ extended: false }));

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

app.post('/new', function (req, resp) {
  console.log('Got request');
  console.log(req.body);
  const title = req.body.title;
  const ingredients = req.body.ingredients;
  const servings = req.body.servings;
  const instructions = req.body.instructions;

  const recipe = { 'title': title,
                  'ingredients': ingredients,
                  'servings': servings,
                  'instructions': instructions };

  recipes.push(recipe);
  resp.send('Thanks for the recipe');
});

app.listen(8090);
