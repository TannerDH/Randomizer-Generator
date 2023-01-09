const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(
    cors({
        origin: '*'
    })
);

app.get('/', (request, response) => {

    fs.readFile('./index.html', 'utf8', (err, html) => {

        if(err) {
            response.status(500).send('sorry, out of order');
        }

        response.send(html);

    });

});

// app.get('/', (request, response) => {
//     response.sendFile(path.join(__dirname, 'index.html'));
// });

// app.get('/javascript', (request, response) => {
//     response.sendFile(path.join(__dirname, '/sheets.js'));
// });

// app.get('/css', (request, response) => {
//     response.sendFile(path.join(__dirname, '/style.css'));
// });

// app.use(express.static(__dirname + '/Randomizer'));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));