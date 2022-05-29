import React from 'react'
import { useState } from 'react';

export default function AddToDo({addToDo}) {

    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const submit = (e)=>{
        // setToDoItemArray(...)
        e.preventDefault();
        if(!Title || !Description){
          alert("Title or description cannot be empty");
        }
        else{
            addToDo(Title,Description);
            setTitle("");
            setDescription("");
        }
      }

  return (
    <div>
        <form className="ml-3 mt-2" onSubmit={submit}>
            <div className="mb-3 flex justify-between">
              <label htmlFor="Title" className="form-label">Title:</label>
              <input type="text" value={Title} onChange={(e)=>setTitle(e.target.value)} className="mr-2 rounded-lg py-0 px-3" id="Title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 flex justify-between">
              <label htmlFor="Description" className="form-label">Description:</label>
            <input type="text" value={Description} onChange={(e)=>setDescription(e.target.value)} className="mr-2 rounded-lg py-0 px-3" id="Description"/>
            </div>
            <button type="submit" className="p-1 bg-emerald-500 font-semibold rounded-lg active:bg-emerald-400 mb-1">Add Task</button>
        </form>
    </div>
  )
}
