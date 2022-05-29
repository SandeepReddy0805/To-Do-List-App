import React from 'react'
import ToDoItem from './ToDoItem.js'

export default function ToDo({onDelete,toDoItemArray}) {
  return (
    <>
      {
        toDoItemArray.length===0?(
          <>
            <p className='text-center font-semibold my-32' >No tasks left.</p>
          </>):
          toDoItemArray.map((todo)=>{
          return <ToDoItem ToDo={todo} onDelete={onDelete} key={todo.sno}/>
        })
      }
    </>
  )
}
