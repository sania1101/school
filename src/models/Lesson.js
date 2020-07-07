const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    Topic:{type: String , required:true},
    Teacher: {type:Types.ObjectId, ref:'Teachers'},
    Group: {type:Types.ObjectId, ref:'Group'},
    Classroom:{type:Types.ObjectId, ref:'Classrooms'},
    StartLasson:{type:Date},
    EndLasson:{type:Date}

})

module.exports = model("Lesson", schema)