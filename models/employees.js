const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const EmpSchema = new Schema({
   name: {
       type: String,
       required: [true,'Name is required'],
       pattern:
   },
    age: {
       type: Number,
       required: [true,'Age is required']
    },
    gender: {
       type: String,
       required: [true,'Gender is required']
    }
});

//Creating mongoose.model(model name,schema name,collection name)
const Emp = mongoose.model('emp',EmpSchema,'emmp');

module.exports = Emp;