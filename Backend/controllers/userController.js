const User = require('../models/user')
exports.getUsers= async (req,res)=>{
    try {
        const users=await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getUserById= async (req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:"User Not Found"});
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.createUser= async (req,res)=>{
    try {
        const {name,email,password}=req.body;
        const user=await User.findOne({email});
        if(user){
            return res.status(401).json({message:"User already Exist"});
        }
        await User.create({
            name,
            email,
            password
        })
        res.status(200).json({message:"User created successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateUser=async (req,res)=>{
    try {
        const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!user){
            return res.status(404).json({message:"User Not Exist"});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.deleteUser= async (req,res)=>{
    try {
        const user =await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({message:"User Deleted successfully"})
        }
        res.status(200).json({message:"User Deleted successfully"})
    } catch (error) {
        res.status(500).send(error) 
    }
}