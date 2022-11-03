const { response, request, application } = require('express');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('pages/body');
})
app.post('/', (req,res) => {
    console.log(req.body.inputEmail3 + " " + req.body.inputPassword3);
    res.send('Login successful');
})

var memberApi = express.Router();

memberApi.get('/', (req,res) => {
    res.send('Member page !');
})

memberApi.get('/profile', (req,res) => {
    res.send('Member profile page !')
})

memberApi.get('/changepassword', (req,res) => {
    res.send('Member change password page !')
})

var adminApi = express.Router();

adminApi.get('/api/admin', (req,res) => {
    res.send('Admin page !');
}) 

app.use('/api/member', memberApi);

app.use('/api/member', adminApi);

app.use(express.static( __dirname +'public'));

app.listen(8080);
