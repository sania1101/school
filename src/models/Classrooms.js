const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    NumberOfSeats:{type: Number , required:true},
    NumberOfRoom: {type:String, required:true}
})

module.exports = model("Classrooms", schema)