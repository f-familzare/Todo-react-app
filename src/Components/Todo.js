import React, { useState } from "react";
import EditTodo from "./EditTodo";

function Todo({todo,editTodo,deleteTodo,changeTodoStatus}){
    const [edit,setEdit]=useState(false)
    let EditHandler=(text) => {
        editTodo(todo.key,text)
        setEdit(false)

    }
    return(
        <>
        {
            !edit ?
            <div className="col-6 mb-2">
                <div className="d-flex justify-content-between align-items-center border rounded p-3">
                    <div>
                    {todo.title}
                    </div>
                    <div>
                        <button type="button" className={`btn btn-sm ${!todo.done?'btn-dark':'btn-warning'}`} onClick={()=>changeTodoStatus(todo.key)}>{!todo.done?'Done':'UnDone'}</button>
                        <button type="button" className="btn btn-info btn-sm ml-1" onClick={()=>setEdit(true)}>Edit</button>
                        <button type="button" className="btn btn-danger btn-sm ml-1" onClick={()=>deleteTodo(todo.key)}>Delete</button>
                    </div>
                </div>
            </div> :
            <EditTodo todo={todo} EditHandler={(text)=>EditHandler(text)}/>
        }

    </>

    );
}
export default Todo;