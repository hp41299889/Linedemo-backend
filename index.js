const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send("This is vuedemo's back-end");
});

app.listen(port, () => {
    console.log(`express is listening on port ${port}`);
})