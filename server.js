const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
}); 

app.listen(3000, (err) => {
    if(err) {
        console.log('error starting server');
    }
    console.log('service has been started');
});
