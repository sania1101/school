const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    Lastname:{type: String , required:true},
    Firstname: {type:String, required:true},
    Group: {type:Types.ObjectId, ref:'Group'},
    GPA:{type:String}
})

module.exports = model("Students", schema)