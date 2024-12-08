import React, { useState,useRef } from 'react';
import   not_tick    from '../assets/not_tick.png';
import   tick   from '../assets/tick.png';
import   Delete_icon   from '../assets/delete.png';
import { FaEdit } from "react-icons/fa";


export const Create_task = ({todolist,settodolist}) => {
  const [newtaskid,setnewtaskid]=useState(null);
  const [newtask,setnewtask]=useState('');
  const updateinputref=useRef();

  const handleCompleteTask=(id)=>{
     settodolist(todolist.map((task)=>{
        return  task.id===id? {...task,isSuccess:!task.isSuccess}:task;
      }))
  }

  const handleDeleteTask=(id)=>{
    settodolist(todolist.filter((task)=>{
         return task.id!==id;
    }))
  }

  const handleEditTask=(id,data)=>{
    setnewtask(data);
    setnewtaskid(id);

  }

  const handleUpdateTask=(id)=>{
    const value=updateinputref.current.value;
    if(value!==""){
      settodolist(todolist.map((task)=>{
        return task.id===id ? {...task,data:value}:task;
      }))
    }

    setnewtask('');
    setnewtaskid(null);
  }
  
  return (
      <>

           {
           todolist.length>0 && 
           todolist.slice(0,6).map
           (
            (todo_obj)=>{
           
            return(

               <div  key={todo_obj.id} className='flex  mt-5 mb-3 text-black min-w-[23vw] max-w-[23vw] h-auto border-black border justify-between items-center px-[12px] ml-2 md:min-w-[50vw] md:max-w-[50vw] sm:min-w-[70vw] sm:max-w-[70vw] mx-auto'>
                
                  <div className="flex gap-2 taskcontent">
                  <button onClick={()=>{handleCompleteTask(todo_obj.id)}}>
                     <img src={todo_obj.isSuccess===false?not_tick:tick} alt="tick_nottick_img" className='w-4 h-4 mt-1' />
                  </button>
                 
                  <p className={todo_obj.isSuccess===false? "": "line-through decoration-black"}>  {todo_obj.data && todo_obj.data.length > 20 
                    ? `${todo_obj.data.substring(0, 25)}` 
                    : todo_obj.data}</p>
                  </div>
                  
                  <div className="flex gap-1 cursor-pointer update_delete_icons">
                    <button onClick={()=>{handleEditTask(todo_obj.id,todo_obj.data)}}>
                      <FaEdit/>
                    </button>
           
                    <button onClick={()=>{handleDeleteTask(todo_obj.id)}}>
                       <img src={Delete_icon} alt="delete_img" className='w-4 h-4' />  
                    </button>
                   
                  </div>
                 
                  
                </div>
            )
             
        })
        
        }
        {
          newtaskid!==null 
          &&  <div className='min-w-[] flex justify-center mt-2 mb-4 md:min-w-[30vw] sm:min-w-[35vw]'>
            <input  ref={updateinputref} type="text" defaultValue={newtask} className='p-1 border border-black rounded-md min-h-[25px] bg-transparent min-w-[80%]'/>
            <button onClick={()=>{handleUpdateTask(newtaskid)}} className="w-10 text-sm border border-black text-white  bg-green-400 rounded-lg min-h-[25px]">Save</button>
          </div>
        }



       
      </>
      

  )
}

