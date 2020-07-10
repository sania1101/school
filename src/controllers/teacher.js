const Lesson = require("../models/Teachers");
const Teachers = require("../models/Teachers");

exports.readAllTeacher = async(req, res)=>{
    try{
        const teacher = Teachers.find()
        const teachers=(await teacher).concat()

        res.json({'m':"all is good", 'date':JSON.stringify(teachers)})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.readOneTeacher = async(req, res)=>{
    try{
        const _id = req.params.id
        const teacher = await Teachers.findOne({"_id":_id})

        res.json({'m':"all is good",'date':teacher})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.deleteTeacher = async(req, res)=>{
    try{
        const id = req.params.id
        const teacher = await Teachers.deleteOne({"_id":id}) 
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.addTeacher = async(req, res)=>{
    try{
        const {Lastname, Firstname, Experience, Specialization} = req.body
        const teacher = new Teachers({Lastname, Firstname, Experience, Specialization})
        await teacher.save();
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.editTeacher = async(req, res)=>{
    try{
        const {Lastname, Firstname, Experience, Specialization} = req.body
        const _id = req.params.id
        const teacher =  await Teachers.findByIdAndUpdate({_id},{Lastname, Firstname, Experience, Specialization})
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};
