const express = require('express');
const bodyParser = require('body-parser');

// my port to 5000 for server side work, create server
const PORT = 5000;
const app = express();
const history = [];

// body parser, json, and express static ('public')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// function to calculate equations
function doMath(equation) {
  // run each equation
  let total;

  if (equation.operator === '+') {
    total = Number(equation.input1) + Number(equation.input2);
  } else if (equation.operator === '-') {
    total = equation.input1 - equation.input2;
  } else if (equation.operator === '*') {
    total = equation.input1 * equation.input2;
  } else if (equation.operator === '/') {
    total = equation.input1 / equation.input2;
  }

  // defining total for calculations
  equation.total = total;

  // passing the equation to the POST
  return equation;
}

// POST the equation to the server
app.post('/calculate', (req, res) => {
  // calculating equations
  const mathReady = req.body;
  // {
  // "input1": integer,
  // "input2": integer,
  // "operator": null,
  // }

  // completedMath that was solved
  const completedMath = doMath(mathReady);

  // calculations stored in history
  history.push(completedMath);
  console.log(history);

  // checking for the Created
  res.sendStatus(201);
});

// Send back or get back history of uses
app.get('/hello', (req, res) => {
  res.send(history);
});

// I need to get the PORT listening
app.listen(PORT, function () {
  console.log('Listening to PORT', PORT);
});
