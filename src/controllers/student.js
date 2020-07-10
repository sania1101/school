const Students = require("../models/Students");

exports.readAllStudent = async(req, res)=>{
    try{
        const student = Students.find()
        const students=(await student).concat()

        res.json({'m':"all is good", 'date':JSON.stringify(students)})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.readOneStudent = async(req, res)=>{
    try{
        const _id = req.params.id
        const student = await Students.findOne({"_id":_id})

        res.json({'m':"all is good",'date':student})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.deleteStudent = async(req, res)=>{
    try{
        const id = req.params.id
        const student = await Students.deleteOne({"_id":id}) 
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.addStudent = async(req, res)=>{
    try{
        const {Lastname, Firstname, Group, GPA} = req.body
        const student = new Students({Lastname, Firstname, Group, GPA})
        await student.save();
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.editStudent = async(req, res)=>{
    try{
        const {Lastname, Firstname, Group, GPA} = req.body
        const _id = req.params.id
        const student =  await Students.findByIdAndUpdate({_id},{Lastname, Firstname, Group, GPA})

        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};
