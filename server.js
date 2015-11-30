var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var port = 8080;

app.use(express.static(__dirname+'/public'));


app.get('/interest_rate', function(req,res){
  var rand = Math.floor((Math.random() * 20) + 1)/100;
  var randObj = {
    rate: rand.toFixed(2)
  }
  console.log(rand);
  res.send(JSON.stringify(randObj));
});

app.listen(port, function(){
  console.log('listening on port: ', port)
})
