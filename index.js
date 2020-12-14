const http = require('http');
const url = require('url');
const fs = require('fs');

http
	.createServer((req, res) => {
		const q = url.parse(req.url, true);
		let filePath = '';

		if (q.pathname === '/') {
			filePath = `./public/index.html`;
		} else {
			filePath = `./public${q.pathname}`;
		}

		fs.readFile(filePath, (err, data) => {
			if (err) {
				res.writeHead(400, { 'Content-Type': 'text/html' });
				fs.readFile('./public/404.html', (err, data) => {
					if (err) {
						throw err;
					} else {
						res.write(data);
						return res.end();
					}
				});
			} else {
				res.writeHead(200, { 'Content-Type': 'text/html' });
				res.write(data);
				return res.end();
			}
		});
	})
	.listen(8080);
