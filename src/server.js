const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const app = express();
require('./database');

app.use(bodyParser.json());
app.use(cors());

// API
app.use(express.static(__dirname + 'public'));

// there is a choice the collection
const products = require('./api/products');
app.use('/api/products', products);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/products', (req, res) => {
    res.json({
        name: 'Vasyok',
        email: 'esd@sdf.com'
    });
});

console.log("adfa");

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});