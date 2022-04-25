// express request handler
const express = require('express');
const app = express();

app.get("/", (req, res) => {
    console.log(Date.now());
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log('server runing at 3000');
});