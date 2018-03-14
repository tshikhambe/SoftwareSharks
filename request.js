var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/README.MD','utf8');
var writeStream = fs.createWriteStream(__dirname + '/writeme.txt');

myReadStream.on('data',function(chunk){
  console.log('new chunk recieved');
  writeStream.write(chunk);

});
