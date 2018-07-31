const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

//set up express app
const app = express();

app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);


//listen for a request
app.listen(2000, function () {
    console.log('the port is running on 2000');
});