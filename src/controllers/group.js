const Groups = require("../models/Group")

exports.readAllGroup = async(req, res)=>{
    try{
        const group = Groups.find()
        const groups=(await group).concat()

        res.json({'m':"all is good", 'date':JSON.stringify(groups)})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.readOneGroup = async(req, res)=>{
    try{
        const _id = req.params.id
        const group = await Groups.findOne({"_id":_id})

        res.json({'m':"all is good",'date':group})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.deleteGroup = async(req, res)=>{
    try{
        const id = req.params.id
        const group = await Groups.deleteOne({"_id":id}) 
        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.addGroup = async(req, res)=>{
    try{
        const {Name, Monitor} = req.body
        const group = new Groups({Name, Monitor})
        await group.save();

        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};

exports.editGroup = async(req, res)=>{
    try{
        const {Name, Monitor} = req.body
        const _id = req.params.id
        const group =  await Groups.findByIdAndUpdate({_id},{Name, Monitor})

        res.json({'m':"all is good"})
    } catch(e){
        console.log(e)
        res.status(500).json({message: "You have problem! Restart app!"})
    }
};
