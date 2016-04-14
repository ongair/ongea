var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var app = express();


// Webhook verfication endpoint
// Used by FB to verify the webhook by passing a token entered in the App settings page
// Return the challenge if successful
// GET /webhook/?...
app.get('/webhook/', function (req, res) {

  token = process.env.FB_VERIFICATION_TOKEN;
  if (req.query['hub.verify_token'] === token) {
    res.send(req.query['hub.challenge']);
  }

  res.send('Error, wrong validation token');
});


// Webhook post 
// Used by FB to post events
// POST /webhook/...
app.post('/webhook/', function (req, res) {

  var messaging_events = req.body.entry[0].messaging;
  for (var i = 0; i < messaging_events.length; i++) {
    var event = req.body.entry[0].messaging[i];
    var sender = event.sender.id; //who sent the message

    if (event.message && event.message.text) {
      var text = event.message.text;  //the text of the message
    }
  }

  res.sendStatus(200);
});


// Start the server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Listening at port ', port);
});
