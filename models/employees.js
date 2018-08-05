const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const validateName = function(name) {
    let re = / [A-Z][a-z]*[0-5] /;
    return re.test(name);
};

//create schema
const EmpSchema = new Schema({
   name: {
       type: String,
       required: true,
       validate: [validateName,'please fill the valid input']
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