var path = require('path'),
    http = require('http'),
    fs = require('fs'),
    mime = require('mime');

var server = http.createServer();

// genericSend(404,"Not found")
function genericSend(code,message,response) {
    response.writeHead(code,{"Content-Type": "text/plain"});
    response.end(message);
};


server.on('request', function(req,res) {
    //possible response codes
    //404
    //500
    //200 Ok

    var urlParams = url.parse(req.url),
        // pathname: /index.html ===> index.html
        filename = path.join('.',urlParams.pathname);

    path.exists(filename,function(exists) {
        if(!exists)
            return genericSend(404,'not found',res);
        fs.readFile(filename,'binary',function(err,file){
            if(err)
                return genericSend(500,'internal server error ',res);

            var type = mime.lookup(filename);
            res.writeHead(200,{'Content-Type': type});
            res.write(file,'binary');
            res.end();
        });
    });
})