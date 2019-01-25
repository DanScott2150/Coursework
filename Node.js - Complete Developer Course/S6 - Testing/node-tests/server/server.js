const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.status(404).send({
    error: "Page Not Found",
    name: "Todo app v1.0"
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: "Dan",
      age: 30
    },
    { name: "Joe",
      age: 29
    }
  ]);
})


app.listen(3000);
module.exports.app = app;
