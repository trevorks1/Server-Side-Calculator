const express = require('express');
const bodyParser = require('body-parser');

// my port to 5000 for server side work, create server
const PORT = 5000;
const app = express();

// body parser, json, and express static ('server/public')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// function to calculate equations
function doMath(calculation) {
  // run each equation
  // passing the equation to the POST
}

// POST the equation to the server
app.post('/calculate', (req, res) => {
  // calculating equations
  // calculations stored in history
  // checking for the Created
});

// Send back or get back history of uses
app.get('/hello', (req, res) => {
  res.send('Hello!');
});

// I need to get the PORT listening
app.listen(PORT, function () {
  console.log(`Listening on port: ${PORT}`);
});
