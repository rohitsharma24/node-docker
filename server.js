const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('hello world');
}); 

app.listen(PORT, (err) => {
    if(err) {
        console.log('error starting server');
    }
    console.log('service has been started');
});
