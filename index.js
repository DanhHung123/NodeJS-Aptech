var http = require('http');
var httpServer = http.createServer(function(req, res){
    res.end('This is my first node app.');
});

httpServer.listen(8080, () => {
    console.log('Server listeninng on port 8080');
})