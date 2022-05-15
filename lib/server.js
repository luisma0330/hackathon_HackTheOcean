const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port);
console.log('Server started at http://localhost:' + port);

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './../views/index.html'));
});

app.get('/animales', (req, res) => {
    res.sendFile(path.join(__dirname, './../views/Lista-de-animales.html'));
});

app.get('/nosotros', (req, res) => {
    res.sendFile(path.join(__dirname, './../views/Acerca-de-nosotros.html'));
});

app.get('/animales/vaquita', (req, res) => {
    res.sendFile(path.join(__dirname, './../views/DescripcionVaquita.html'));
});

app.get('/animales/Tiburon', (req, res) => {
    res.sendFile(path.join(__dirname, './../views/DescripcionTiburon.html'));
});

app.get('/animales/Tortuga', (req, res) => {
    res.sendFile(path.join(__dirname, './../views/DescripcionTortuga.html'));
});