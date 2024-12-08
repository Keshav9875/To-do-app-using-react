import React, { useState, useRef, useEffect } from 'react'
import todoicon from "../assets/todo_icon.png";
import {v4 as uuidv4} from "uuid";
import { Create_task } from './CreateTask';

export const Todo = () => {

    const [todolist,settodolist]=useState(localStorage.getItem("todolist")?JSON.parse(localStorage.getItem("todolist")):[]);
    const inputref=useRef(null);

    const handletask=()=>{
       const inputdomref=inputref.current;
       const value=inputref.current.value.trim();
       inputdomref.value="";

       
       if(value!==""){
        const todo_objdata={
            data:value,
            isSuccess:false,
            id:uuidv4(),
           }
           
           settodolist((prev)=>{
            return (prev.length===0 ?[todo_objdata]:[...prev,todo_objdata]);
           })
       
          
       }
      
    
    }

    useEffect(()=>{
        localStorage.setItem("todolist",JSON.stringify(todolist));
    },[todolist])
    
    return (
     <div className=' bg-white min-h-[70vh] min-w-[25vw] rounded-md max-h-auto p-1 md:max-w-[60vw]  md:min-w-[60vw]  sm:min-w-[80vw]'>
        <div className="flex w-full gap-1 pt-1 pl-4 mainheading">
           <img src={todoicon} alt="todoicon" className="w-8" />
           <h1>To-Do List</h1>

        </div>
       
         <div className='bg-slate-300 w-[80%] mx-auto relative rounded-lg flex items-center mt-4 mb-2 h-9 sm:w-[95%] sm:text-xs md:w-[85%]'>
        
            <input ref={inputref} type="text" placeholder='Add your task' className='pl-4 bg-transparent border-0 outline-none placeholder:text-slate-500 placeholder:text-xs py-auto ' />
            <button onClick={handletask} className='absolute right-0 p-[8px] text-sm text-white bg-orange-400 rounded-lg py-auto'>Add +</button>
        </div>
     
        <Create_task todolist={todolist} settodolist={settodolist}/>
    </div>
  )
}
