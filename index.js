const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/empgo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//initialize routes
app.use('/api',routes);


//listen for a request
app.listen(2000, function () {
    console.log('the port is running on 2000');
});