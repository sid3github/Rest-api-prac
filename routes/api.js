const express = require('express');
const router = express.Router();

//get list of employees from db
router.get('/employees',function (req,res) {
    res.send({type: 'GET'});
});
//adding a new employee to db
router.post('/employees',function (req,res) {
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        age : req.body.age,
        gender: req.body.gender
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