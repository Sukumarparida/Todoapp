 import { useState } from "react";
 import { BiTask } from "react-icons/bi";


function Addtodo({newitem}){

 const [todoname,setTodoname] = useState("");
 const [tododate,setTododate] = useState("");

const handlenamechange=(event)=>{
  setTodoname(event.target.value);
};
const handledatechange=(event)=>{
  setTododate(event.target.value);
};

const handleaddtodo=(event) =>{
   newitem(todoname,tododate)
  event.preventDefault();
   setTodoname("");
   setTododate(""); 
}
    return <>
     <form className="row mb-2" onSubmit ={handleaddtodo}>
            <div className="col-6">
              <input type="text" placeholder="Enter todo item" value={todoname} onChange={handlenamechange}/>
            </div>
            <div className="col-4">
              <input type="date" value={tododate} onChange={handledatechange}/>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success" ><BiTask /></button>
            </div>
          </form>
    </>
}
export default Addtodo;