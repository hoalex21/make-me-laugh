let express = require('express');
let axios = require('axios');
let path = require('path');
let env = require('../env.json');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

let port = 3000;
let hostname = 'localhost';

app.get('/dad-joke', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://dad-jokes.p.rapidapi.com/random/joke',
        headers: {
            'X-RapidAPI-Key': env['rapid-api-key'],
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };

    axios.request(options).then((response) => {
        let data = response.data;
        console.log(data.body[0]);
        res.json(data.body[0]);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}`)
});
