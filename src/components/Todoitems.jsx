
import Todoitem from "./Todoitem";
const Todoitems=({todoitems ,ondclick})=>{
    return  <div className="Todotext">
       {todoitems.map(item =>   <Todoitem 
       key ={item.name}
       name={item.name} 
       date={item.date} onDeleteClick={ondclick}></Todoitem>)}
      
        
         </div>
         
   
}
export default Todoitems;