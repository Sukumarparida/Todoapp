import { MdOutlineTask } from "react-icons/md";
function Todoitem({name ,date, onDeleteClick}){

  
return <>
 <div className="row ">
            <div className="col-6">
             {name}
            </div>
            <div className="col-4">
             {date}
            </div>
            <div className="col-2">
              <button className="btn btn-danger s-button" onClick={() =>  onDeleteClick(name)}><MdOutlineTask /></button>
            </div>
          </div>

</>
}
export default Todoitem;