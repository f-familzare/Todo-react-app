import React ,{useState,useContext} from "react";
import TodoContext from "../Contexts/TodoContext";

function AddTodo(){
    
    const [formInput,setFormInput]=useState({formInput:''})
    let todoContext=useContext(TodoContext)
    const formHandler=(event)=>{
        event.preventDefault();
        todoContext.add(formInput)
        setFormInput({formInput:''})
    }
    const inputHandler=(event)=>{
        setFormInput(event.target.value)
    }

    return(
    <form className="form-inline" onSubmit={formHandler}>
        <div className="form-group">
          <input type="text" className="form-control mx-sm-3" placeholder="I want to do ..." onChange={inputHandler} value={formInput.formInput}/>
          <button type="submit" className="btn btn-primary">add</button>
        </div>
    </form>
    )
}
export default AddTodo;