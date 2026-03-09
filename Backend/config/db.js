const mogoose =require('mongoose');

const connectDB=async()=>{
    try{
        await mogoose.connect(process.env.MONGO_URL);
        console.log("mongodb connected successfully 🎉🎉");
    }catch{
        console.log(err);
    }
};
module.exports=connectDB;