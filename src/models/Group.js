const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    Name:{type: String , required:true},
    Monitor: {type:Types.ObjectId, ref:'Students'}
})

module.exports = model("Group", schema)