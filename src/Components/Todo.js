import React, { useContext, useState } from "react";
import TodoContext from "../Contexts/TodoContext";
import EditTodo from "./EditTodo";

function Todo({todo}){
    const todoContext=useContext(TodoContext)
    // const {editTodo,deleteTodo,changeTodoStatus}=todoContext
    const [edit,setEdit]=useState(false)

    let EditHandler=(text) => {
        todoContext.dispatch({type:"editTodo" , payload:{key:todo.key,text:text}})
        setEdit(false)
    }

    let DeleteHandler=(e)=>{
        todoContext.dispatch({type:"deleteTodo",payload:{key:todo.key}})
    }

    let StatusHandler=(e)=>{
        console.log(todoContext.dispatch({type:"changeTodoStatus",payload:{key:todo.key}}))
        todoContext.dispatch({type:"changeTodoStatus",payload:{key:todo.key}})
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
                        <button type="button" className={`btn btn-sm ${!todo.done?'btn-dark':'btn-warning'}`} onClick={StatusHandler}>{!todo.done?'Done':'UnDone'}</button>
                        <button type="button" className="btn btn-info btn-sm ml-1" onClick={()=>setEdit(true)}>Edit</button>
                        <button type="button" className="btn btn-danger btn-sm ml-1" onClick={DeleteHandler}>Delete</button>
                    </div>
                </div>
            </div> :
            <EditTodo todo={todo} EditHandler={(text)=>EditHandler(text)}/>
        }

    </>

    );
}
export default Todo;