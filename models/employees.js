const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and models
const EmpSchema = new Schema({
   name: {
       type: String,
       required: [true,'Name is required']
   },
    age: {
       type: Number
    },
    gender: {
       type: String
    }
});

const Emp = mongoose.model('emp',EmpSchema,'emmp');

module.exports = Emp;