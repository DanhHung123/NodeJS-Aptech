var express = require('express');
var app = express();

app.use(express.looger());

app.get('/', (req,res) => res.send("hello " + req.param('person')) );

app.get('/goobye', (req,res) => {
    res.send('Googbye world');
})

app.all('*', (req, res) => {
    res.send(404);
})

app.listen(8080, () => {
    console.log("server is running on 8080");
})