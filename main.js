const express = require('express');
const app = express();
app.use(express.json());
var publicDir = require('path').join(__dirname, '/public');
app.use(express.static(publicDir));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.listen(process.env.PORT || 3333);
console.log(`Listening at ${process.env.PORT}`);