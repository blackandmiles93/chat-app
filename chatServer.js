var net = require('net'); 
var port = 3000;
var clientNum = 0;

var server = net.createServer(function(c) { 

  console.log('client connected');

  c.write('Hello Client\r\n'); 

  clientNum++;
  console.log(clientNum);

  c.on('data', function(data) {
    console.log(data.toString().trim());
    c.write(data.toString().trim());
  });

  c.on('end', function() {
    console.log('client disconnected');
  });

});

server.listen(port, function() {
  console.log('listening on ' + port);
});