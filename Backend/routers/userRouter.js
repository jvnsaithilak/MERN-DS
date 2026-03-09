const express=require('express');
const { getUserById, createUser, updateUser, deleteUser, getUsers } = require('../controllers/userController');

const userRouters=express.Router();

userRouters.get('/',getUsers);
userRouters.get('/:id',getUserById);
userRouters.post('/create',createUser);
userRouters.put('/update/:id',updateUser);
userRouters.delete('/delete/:id',deleteUser);

module.exports=userRouters