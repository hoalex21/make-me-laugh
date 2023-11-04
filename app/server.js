let express = require('express')
let app = express()

let port = 3000;
let hostname = 'localhost';

app.get('/', function (req, res) {
    res.send('Make me laugh');
});
  
app.listen(port, hostname, () => {
    console.log(`http://${hostname}:${port}/`)
});
