const express = require('express')
const app = express()

var recipes = require('./potato_recipes.json');

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
  })

app.get('/', function(req, resp){
   resp.send('Hello world')
})

// http://localhost:8090/wave/Alan
app.get('/wave/:name', (req, res) => {
  const name = req.params.name;
  res.send(`waving at ${name}`);
})

// http://localhost:8090/w?person=Alan
app.get('/w', function(req, res){
  const person = req.query.person;
  res.send(`Hello ${person}`);
})

// New route to search for recipes
// http://localhost:8090/recipes?title=Baked
app.get('/recipes', (req, res) => {
  const title = req.query.title;
  if (!title) {
    return res.status(400).send('Title query parameter is required');
  }

  const result = recipes.filter(recipe => recipe.title && recipe.title.toLowerCase().includes(title.toLowerCase()));
  res.json(result);
})

app.post('/new', function(req, res){
  res.send('You sent a POST request')
})

app.listen(8090)