const express = require('express');
const bodyParser = require('body-parser');
const db = require('./dbConnection/dbConnection');
const ApiUrl= require('./enum/api-url.enum');
const cors = require('cors');



const app = express();
app.use(bodyParser.json());
app.use(cors());


app.post(ApiUrl.apiOrder, (req, res) => {
    const { amount } = req.body;
    const query = 'INSERT INTO orders (amount) VALUES (?)';
    db.query(query, [amount], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(201).json({ id: results.insertId, amount });
    });
});

app.get(ApiUrl.apiOrder, (req, res) => {
    const query = 'SELECT * FROM orders';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
