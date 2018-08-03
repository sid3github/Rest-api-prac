const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Emp = require('./models/employees');

//set up express app
const server = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/empgo');
//mongoose.Promise = global.Promise;

server.use(bodyParser.json());

//server.use('/api');

//initialize routes
server.get('/employees',function (req,res,next) {
    res.send({type: 'GET'});
});
//adding a new employee to db
server.post('/employees',function (req,res,next) {
    Emp.create(req.body).then(function (emp) {
        res.send(emp);
    }).catch(next);
});
//updating a employee to db
server.put('/employees/:id',function (req,res,next) {
    Emp.findByIdAndUpdate({_id:req.params.id},req.body).then(function(emp){
        res.send(emp);
    });
});
//deleting a employee from db
server.delete('/employees/:id',function (req,res,next) {
    Emp.findByIdAndRemove({_id:req.params.id}).then(function(emp){
        res.send(emp);
    });
});

//Error handling middleware.
server.use(function(err,req,res,next){
    res.send({error: err.message});
});

//listen for a request
server.listen(2000, function () {
    console.log('the port is running on 2000');
});