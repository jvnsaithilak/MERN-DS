import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
const Todo = () => {
    const [task,setTask]= useState('');
    const [todos,setTodos] = useState([])
    const [edit,setEdit]= useState(null);
    const API=`http://localhost:3000/api/todo/`
    const fetchTodo=async()=>{
        const res=await axios.get(`http://localhost:3000/api/todo/`);
        setTodos(res.data);
    }
    useEffect(()=>{
        fetchTodo()
    },[])

    
    const handleAddOrEdit=async(e)=>{
        e.preventDefault();
        if(edit){
            await axios.put(`${API}update/${edit}`,{task});
            setEdit(null);
        }
        else{
            await axios.post(`${API}create`,{task})
        }
        setTask('');
        fetchTodo();
    };
    const handleDelete=async(id)=>{
        await axios.delete(`${API}delete/${id}`)
    };
    const handleToggleStatus= async(todo)=>{
        await axios.put(`${API}update/${todo._id}`,{
            completed:!todo.completed
        })
        fetchTodo();
    };
  return (
    <div>
        <h1>Todo</h1>
        <br />
      <label>Task:</label>
      <input type="text" 
      placeholder='Enter the task' 
      value={task}
      onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={handleAddOrEdit}>{(edit)?"update":"Add"}</button>
      <br /><br />
      <ul>
        {todos.map((todo)=>(
            <li key={todo._id}>
                <span style={{
                    cursor:"pointer",
                    textDecoration:todo.completed?"line-through":"none"
                }}
                onClick={()=>handleToggleStatus(todo)}
                >{todo.task}</span>
                <button onClick={()=>{
                    setTask(todo.task);
                    setEdit(todo._id);
                }}>🖊️</button>
                <button onClick={()=>handleDelete(todo._id)}>🗑️</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
