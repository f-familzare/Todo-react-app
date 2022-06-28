import React ,{useState} from "react";

function EditTodo({todo,EditHandler}) {
    const [formInput,setFormInput]=useState(todo.title)
    let inputHandler=(event)=>{
        setFormInput(event.target.value)
    }
    return(
        <div className="col-6 mb-2">
        <div className="d-flex justify-content-between align-items-center border rounded p-3">
            <div>
            <input value={formInput} onChange={inputHandler} className="form-control"/>
            </div>
            <div>
                <button type="button" className="btn btn-info btn-sm ml-1" onClick={()=>EditHandler(formInput)}>Edit</button>
            </div>
        </div>
    </div>
    )
}
export default EditTodo;