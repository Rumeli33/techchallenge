const express = require('express');
const data = require ('./data/phones.json');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();
// our first Route
app.get('/phones', (request, response, next) => {
    
    response.json(data);
  });

  app.get('/phones/:id', (request, response, next) => {
    //console.log(data);
    const paramid = request.params.id;
    console.log(paramid);
    const onePhone = data.find(element => 
         element.id.toString() === paramid);
    response.json(onePhone);
  });

  // Server Started
app.listen(3000, () => console.log('My first app listening on port 3000! '));