const Lesson = require("../models/Lesson")
const Teachers = require("../models/Teachers")
const Groups = require("../models/Group")
const Classrooms = require("../models/Classrooms")

exports.readAllLesson = async(req, res)=>{
    try{
        const lesson = Lesson.find()
        const lessons=(await lesson).concat()
        const result = []
        for(let i = 0; lessons.length>i; i++){
            let {Topic, Teacher, Group, Classroom, StartLasson, EndLasson} = (await lesson).pop()
            let teacher = await Teachers.findOne({"_id":Teacher})
            let group = await Groups.findOne({"_id":Group})
            let classroom = await Classrooms.findOne({"_id":Classroom})
            
            
            const data =  {
                Topic,
                "Teacher":teacher.Lastname,
                "Group":group.Name,
                "Classroom":classroom.NumberOfRoom,
                StartLasson,
                EndLasson
            }

            result.push(data)
        }

        res.json({'m':"all is good", 'date':JSON.stringify(result)})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.readOneLesson = async(req, res)=>{
    try{
        const id = req.params.id
        const lesson = await Lesson.findOne({"_id":id})
        const {Topic, Teacher, Group, Classroom, StartLasson, EndLasson} = lesson

        const teacher = await Teachers.findOne({"_id":Teacher})
        const group = await Groups.findOne({"_id":Group})
        const classroom = await Classrooms.findOne({"_id":Classroom})
        
        const date = {
            Topic,
            "Teacher":teacher.Lastname,
            "Group":group.Name,
            "Classroom":classroom.NumberOfRoom,
            StartLasson,
            EndLasson
        }
        res.json({'m':"all is good", date})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.deleteLesson = async(req, res)=>{
    try{
        const id = req.params.id
        await Lesson.deleteOne({"_id":id}) 
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.addLesson = async(req, res)=>{
    try{
        const {Topic, Teacher, Group, Classroom, StartLasson, EndLasson} = req.body
        const lesson = new Lesson({Topic, Teacher, Group, Classroom, StartLasson, EndLasson})
        await lesson.save();

        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.editLesson = async(req, res)=>{
    try{
        const {Topic, Teacher, Group, Classroom, StartLasson, EndLasson} = req.body
        const _id = req.params.id
        await Lesson.findByIdAndUpdate({_id},{Topic, Teacher, Group, Classroom, StartLasson, EndLasson})

        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};
