var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();


// Webhook verfication endpoint
// Used by FB to verify the webhook by passing a token entered in the App settings page
// Return the challenge if successful
app.get('/webhook/', function (req, res) {

  token = process.env.FB_VERIFICATION_TOKEN;
  if (req.query['hub.verify_token'] === token) {
    res.send(req.query['hub.challenge']);
  }

  res.send('Error, wrong validation token');
});


// Start the server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening at port ', port);
});
