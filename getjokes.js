var http = require('http');
var fs = require('fs');

var jokes = [];

var url = 'http://api.icndb.com/jokes/random';

var iterations = 100;
var currentIteration = 0;

getChuck();

function getChuck() {
  var request = new Promise((resolve, reject) => {
    http.get(url, res => {
      res.setEncoding('utf8');
      var body = '';
      res.on('data', data => body += data);
      res.on('end', () => resolve(body));
      res.on('error', err => reject(err));
    });
  });
  request.then(body => parseResult(body));
  request.catch(err => console.log(err));
}

function parseResult(res) {
  res = JSON.parse(res);
  var joke = res.value.joke;
  if (jokes.indexOf(joke) === -1) {
    jokes.push(joke);
  }

  if (currentIteration <= iterations) {
    currentIteration++;
    getChuck();
  }
  else {
    fs.writeFile('jokes.json', JSON.stringify(jokes));
  }
}
