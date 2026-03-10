const Todo=require('../models/todo');
exports.createTodo= async(req,res)=>{
   try {
        const {task}=req.body;
        const todo = await Todo.create({task});
        res.status(202).json(todo);
   } catch (error) {
        res.status(500).send(error);
   }
}

exports.getTodo= async(req,res)=>{
    try {
        const todos=await Todo.find();
        res.status(201).json(todos)
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.updateTodo=async(req,res)=>{
    try {
        const todo= await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!todo){
            return res.status(404).json({message:"Todo not Found"});
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).send(error);
    }
}
exports.deleteTodo= async(req,res)=>{
     try {
        const todo= await Todo.findByIdAndDelete(req.params.id);
        if(!todo){
            return res.status(404).json({message:"Todo not Found"});
        }
        res.status(200).json({message:"todo Deleted successfully"});
    } catch (error) {
        res.status(500).send(error);
    }
}