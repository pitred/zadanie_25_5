var express = require('express');
var app = express();

app.use('/store', (req, res, next) => {
   console.log('I am an intermediary when requesting to /store');
   next();
});

app.get('/', (req, res) => {
   res.send('Hello world !');
});

app.get('/store', (req, res) => {
   res.send('This is store');
});

app.listen(3000);
app.use((req, res, next) => {
   res.status(404).send('Sorry we cant find what you request !');
});
