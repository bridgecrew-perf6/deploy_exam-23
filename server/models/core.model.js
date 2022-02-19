const mongoose = require('mongoose');

const CoreSchema = new mongoose.Schema({
    name:  {type:String,
            required: [true, 'Name required'],
            minlength: [3, 'Length must be at least 3 characters']
            },
    type:  { type:String,
            required: [true, 'Type required'],
            minlength: [3, 'Length must be at least 3 characters']
            },
    description:{   type:String,
                    required: [true, 'Description required'],
                    minlength: [3, 'Length must be at least 3 characters']
                },
        skill1: {
                type:String
        },
        skill2:{
                type:String
        },
        skill3:{
                type:String
        }

},{timestamps:true})


module.exports.Core = mongoose.model("Core",CoreSchema);