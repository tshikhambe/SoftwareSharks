var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res)
{

  res.writeHead(200,{'content-Type':'text/html'});

  var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
  myReadStream.pipe(res);

});
server.listen(8002);

console.log('listening to port 8002');
