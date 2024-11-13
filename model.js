
const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const projects = new Schema({
    projectname:{
        type:String,
        required:true
    },
    Assignedto:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
    Task:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    starttime:{
        type:Date,
        default:() => Date.now()
    },
    Endtime:{
        type:Date,
        default:() => Date.now()
    },
    Status:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('projects',projects)
