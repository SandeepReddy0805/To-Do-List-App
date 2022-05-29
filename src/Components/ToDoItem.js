import React from 'react'

export default function ToDoItem({ToDo,onDelete}) {
  return (
    <div className="py-4 px-3 my-4 bg-orange-100 w-11/12 mx-auto rounded-lg">
            <h3 className='font-semibold ml-4 text-md'>{ToDo.title}</h3>
            <div className='px-4'>{ToDo.description}</div>
                <button className='bg-red-500 px-4 rounded-md mt-2 mx-4 active:bg-red-400' onClick={()=>{onDelete(ToDo)}}>Delete</button>
        </div>
  );
}
