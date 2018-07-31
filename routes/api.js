const express = require('express');
const router = express.Router();
const Emp = require('../models/employees');

//get list of employees from db
router.get('/employees',function (req,res) {
    res.send({type: 'GET'});
});
//adding a new employee to db
router.post('/employees',function (req,res) {
    Emp.create(req.body).then(function (emp) {
        res.send(emp);
    });
});
//updating a employee to db
router.put('/employees/:id',function (req,res) {
    res.send({type: 'PUT'});
});
//deleting a employee from db
router.delete('/employees/:id',function (req,res) {
    res.send({type: 'DELETE'});
});

module.exports = router;