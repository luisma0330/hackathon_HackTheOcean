const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const port = 3000;

app.listen(port);
console.log('Server started at http://localhost:' + port);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './../views/index.html'));
});

app.get('/animales', (req, res) => {
    res.sendFile(path.join(__dirname, './../views/Lista-de-animales.html'));
});