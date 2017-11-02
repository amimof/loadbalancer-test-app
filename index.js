const express = require('express');
const app = express();
const os = require('os');

app.get('/', function (req, res) {
  res.send({
    time: new Date,
    path: "/",
    message: "Welcome to loadbalancer-test-app"
  });
});

app.get('/a', function (req, res) {
  res.send({
    time: new Date,
    path: "/a",
    message: "Welcome to loadbalancer-test-app",
    hostname: os.hostname()
  });
});

app.get('/b', function (req, res) {
  res.send({
    time: new Date,
    path: "/b",
    message: "Welcome to loadbalancer-test-app",
    hostname: os.hostname()
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
