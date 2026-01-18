import Appname from "./components/Appname.jsx";
import Addtodo from "./components/Addtodo.jsx";
import Todoitems from "./components/Todoitems.jsx";
import Welcomemessage from "./components/welcomemessage.jsx";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
function App() {

  const [todoitems,settodoitems] =useState([]);

const handlenewitem = (itemname,itemdate)=>{
  const addnewtodo =[...todoitems,
   {name:itemname,date:itemdate}
  ];
   settodoitems(addnewtodo);
};


const handledeletetodo = (todoitemname) =>{
  const deleteitem = todoitems.filter(item => item.name !== todoitemname);
  settodoitems(deleteitem);
};



  return (
    <>
      <center className="todo-container">
       <Appname/>
        <div className="container ">
         <Addtodo newitem ={handlenewitem}/>
          {todoitems.length === 0 && <Welcomemessage></Welcomemessage>}
        <Todoitems todoitems={todoitems} ondclick={handledeletetodo}/>
        </div>
       
      </center>
    </>
  );
}

export default App;
