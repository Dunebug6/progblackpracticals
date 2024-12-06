const express = require('express');
const app = express();

let instruments = [ 'piano', 'concertina', 'double bass'];

app.get('/client', function (req, resp){
    resp.send(instruments);
});

app.listen(8090);