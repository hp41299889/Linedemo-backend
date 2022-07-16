"use strict";
const express = require('express');
const cors = require('cors');
const select = require('./service//index');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/api', (req, res) => {
    console.log('post!');
    select(req.body);
});

app.listen(port, () => {
    console.log(`express is listening on port ${port}`);
})