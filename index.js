const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Emp = require('./models/employees');
const {check,validationResult} = require('express-validator/check');

//set up express app
const server = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/empgo');
//mongoose.Promise = global.Promise;

server.use(bodyParser.json());

//server.use('/api');

//initialize routes
server.get('/employees',function (req,res,next) {
    Emp.find({}).then(function (data){
    res.json(data);
   });
});
//adding a new employee to db
//the .create method will both create and save the data received from the client and then again will be forwarded to client itself.
server.post('/employees',[ 
    check('name').isString(),
    check('age').isNumeric(),
    check('gender').isString()
],function (req,res,next) {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
         return res.json({error: errors.array()});
    }
    let data = new Emp();
    data.name = req.body.name;
    data.age = req.body.age;
    data.gender = req.body.gender;

    data.save().then(user => {
        res.json(user);
    }).catch(err => {
        next(err);
    });
});
//  server.post('/employees,function(req,res,next){
//  Emp.create(req.body).then(function(emp){
//  res.send(emp);
//  }).catch(next);
// });


//updating a employee to db
//In put method we get a specific id selected by user to which the data is updated,findById will find the Id and with the help of req.body it will update the data,then send updated data to client. 
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
// server.use(function(err,req,res,next){
//     res.send({error: err.message});
// });

//listen for a request
server.listen(2000, function () {
    console.log('the port is running on 2000');
});