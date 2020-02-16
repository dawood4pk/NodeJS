const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});

	const f = fs.readFileSync('./text.txt', 'utf8');
	res.write(f);
	res.end();
}).listen(4000);