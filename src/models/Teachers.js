const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    Lastname:{type: String , required:true},
    Firstname: {type:String, required:true},
    Experience: {type:Number, required:true},
    Specialization:{type:String, default:"biolog"}
})

module.exports = model("Tiechers", schema)