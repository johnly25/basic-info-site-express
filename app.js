const express = require('express');
const app = express();
const port = '3000'

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/404', (req, res) => {
    res.send("uhh");
})

app.get('/about', (req, res) => {
    res.send("about");
})

app.get('/contact-me', (req, res) => {
    res.send("contact-me");
})

app.get('*', (req,res) => {
    res.status(404).send('what???');
})
app.listen(port, ()=> {
    console.log('app is now listening on port ' + port);
})