const http = require('http');
const url = require('url');
const fs = require('fs');

http
	.createServer((req, res) => {
		const q = url.parse(req.url, true);
		const filePath = `./public${q.pathname}`;
		fs.readFile(filePath, (err, data) => {
			if (err) {
				res.writeHead(400, { 'Content-Type': 'text/html' });
				return res.end();
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(data);
				return res.end();
			}
		});
	})
	.listen(8080);
