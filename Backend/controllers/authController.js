const Auth =require('../models/auth')
const bcrypt=require('bcryptjs');
exports.register=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const exist=await Auth.findOne({email});
        if(exist){
            return res.status(400).json({message:"User Already"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await Auth.create({
            name,
            email,
            password:hashedPassword
        })
        res.status(201).json({message:"User created successfully",user})
    } catch (error) {
        res.status(500).json(error);
    }
}
exports.login=async(req,res)=>{
    try {
       const{email,password}=req.body;
       const user=await Auth.findOne({email});
       if(!user){
            return res.status(401).json({message:"User Not Fount"});
       } 
       const match =await bcrypt.compare(password,user.password);
       if(!match){
            return res.status(300).json({message:"Invalid credential"});
       }
       res.status(200).json({message:"Login Successfully"})
    } catch (error) {
        res.status(500).json(error);
    }
}