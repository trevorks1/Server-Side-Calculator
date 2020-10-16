const express = require('express');
const bodyParser = require('body-parser');

// my port to 5000 for server side work
const PORT = 5000;
const app = express();

// body parser, json, and express static ('server/public')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('server/public'));

// Calculate the Math for the client side

// POST an Array for solving?

// Send back or get back history of uses

// I need to get the PORT listening
