const express = require('express');

//set up express app
const app = express();

app.get('/',function (req,res) {
    console.log('GET request');
    res.send({name: 'Siddharth'});
});

//listen for a request
app.listen(2000, function () {
    console.log('the port is running on 2000');
});