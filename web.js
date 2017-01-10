var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send("<img style='width:35%;height:35%;' src ='https://upload.wikimedia.org/wikipedia/commons/8/80/Metal_dragon_half_frontal_view.jpg'/>");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
