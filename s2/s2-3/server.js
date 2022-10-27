var express = require('express'),
    app = express(),
    articles = require('./articles')


var post = [];

var notImplimented = (req,res) => {
    res.send(501)
}


app.get('/articles' ,notImplimented) ;
app.get('/articles/:articled' ,notImplimented) ;
app.get('/articles/new' ,notImplimented) ;
app.post('/articles' ,notImplimented) ;
app.put('/article/:articleId',notImplimented) ;
app.del('/article/:articleId',notImplimented) ;
 


app.post('/articles/:articled/comments',notImplimented);
app.del('/articles/:articled/comments/:commetnId',notImplimented);


app.listen(8080);