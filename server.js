var http = require('http');
var ecstatic = require('ecstatic');

http.createServer(
  ecstatic({ root: __dirname })
).listen(80);

console.log('Listening on 80');
