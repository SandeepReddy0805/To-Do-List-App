import { useState,useEffect} from "react";
import ToDo from "./Components/To-Do";
import AddToDo from "./Components/AddToDo";


export default function App() {
  let initList;
  if(localStorage.getItem("toDoItemArray")===null){
    initList =[];
  }
  else{
    initList=JSON.parse(localStorage.getItem("toDoItemArray"));
  }
  
  const [toDoItemArray, setToDoItemArray] = useState(initList);
  useEffect(() => {
    localStorage.setItem("toDoItemArray",JSON.stringify(toDoItemArray));
  }, [toDoItemArray]);
  
  const onDelete = (ToDo)=>{
      setToDoItemArray(toDoItemArray.filter((e)=>{
        return e!==ToDo;
      }));
      localStorage.setItem("toDoItemArray",JSON.stringify(toDoItemArray));
  }
  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  const addToDo = (title,description)=>{
    let sno;
    if(toDoItemArray.length===0){
      sno=0;
    }
    else
    sno = toDoItemArray.length===0?1:toDoItemArray[toDoItemArray.length-1].sno+1;
    const newToDo = {
      sno:sno,
      title:toTitleCase(title),
      description:description
    }
    setToDoItemArray([...toDoItemArray,newToDo]);
  }
  return (
    <>
      <div className="bg-orange-100 min-h-[100vh] w-[100vw] z-0">
        <div className="w-[90vw] sm:w-1/3 min-h-[80vh] bg-orange-400 border mx-auto z-10 pt-8 rounded-b-3xl shadow-emerald-800 shadow-xl drop-shadow-lg">
          <div className="bg-emerald-500 font-bold flex align-middle justify-center">
            <img src="to-do-list.png" alt="" className="w-[30px]" />
            <h1 className="text-center text-white text-2xl">To-Do List</h1>
          </div>
          <AddToDo addToDo={addToDo}/>
          <hr />
          <ToDo toDoItemArray={toDoItemArray} onDelete={onDelete}/>
        </div>
      </div>
    </>
  );
}
    