const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve all files in public directory to the base URL.
app.use(express.static('public'));

// Handle 404
app.use((req, res, next) => {
	res.status(404);
	res.sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
