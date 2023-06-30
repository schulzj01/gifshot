// server.js (Express 4.0)
const express = require('express');
const open = require('open');

app = express();
// SERVER CONFIGURATION
app.use(express.static(__dirname + '/../')); // set the static files location /public/img will be /img for users

app.listen(8001);
// opens the url in the default browser
open('http://localhost:8001');

console.log('To preview gifshot, go to localhost:8001');