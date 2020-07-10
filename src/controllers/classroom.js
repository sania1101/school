const Lesson = require("../models/Lesson")
const Classrooms = require("../models/Classrooms")

exports.readAllClassroom = async(req, res)=>{
    try{
        const classroom = Classrooms.find()
        const classrooms=(await classroom).concat()

        res.json({'m':"all is good", 'date':JSON.stringify(classrooms)})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.readOneClassroom = async(req, res)=>{
    try{
        const _id = req.params.id
        const classroom = await Classrooms.findOne({"_id":_id})

        res.json({'m':"all is good",'date':classroom})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.deleteClassroom = async(req, res)=>{
    try{
        const id = req.params.id
        const classroom = await Classrooms.deleteOne({"_id":id}) 
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.addClassroom = async(req, res)=>{
    try{
        const {NumberOfRoom, NumberOfSeats} = req.body
        const Classroom = new Classrooms({NumberOfRoom, NumberOfSeats})
        await Classroom.save();

        res.json({'m':"all is good!!!"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.editClassroom = async(req, res)=>{
    try{
        const {NumberOfRoom, NumberOfSeats} = req.body
        const _id = req.params.id
        const Classroom =  await Classrooms.findByIdAndUpdate({_id},{NumberOfRoom, NumberOfSeats})
        
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};
