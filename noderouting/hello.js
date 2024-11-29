const express = require('express')
const app = express()

app.get('/secret', (req, resp, next) => {
    resp.send('Accessing the secret section ...')
    next() // pass control to the next handler
  })

app.get('/', function(req, resp){
   resp.send('Hello world')
})


app.listen(8090)