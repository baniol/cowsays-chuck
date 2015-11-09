var fs = require('fs');
var cowsay = require('cowsay');

var jokes = fs.readFileSync('jokes.json', 'utf8');
parseJokes(jokes);

function parseJokes(res) {
  var jokes = JSON.parse(res);
  var max = jokes.length;
  var random = Math.floor(Math.random() * (max));
  var str = jokes[random].replace(/&quot;/g, '"');
  console.log(cowsay.say({
    text: str,
    e: "oO",
    T: "U "
  }));
}