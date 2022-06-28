import React,{useState} from "react";
import Todo from "./Todo";

function TodoList({todos,deleteTodo,changeTodoStatus,editTodo}) {
    const [status,setStatus]=useState(false);
    let tasks=todos.todos.filter(task=>task.done === status)
    return(
        <>
                <nav className="col-6 mb-3">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className={`nav-item nav-link font-weight-bold ${status===false ? 'active':''}`} id="nav-home-tab" onClick={()=>setStatus(false)}>undone <span className="badge badge-secondary">{todos.todos.filter(item=>item.done===false).length}</span></a>
                        <a className={`nav-item nav-link font-weight-bold ${status===true ? 'active' : '' }`} id="nav-profile-tab" onClick={()=>setStatus(true)}>done <span className="badge badge-success">{todos.todos.filter(item=>item.done===true).length}</span></a>
                    </div>
                </nav>
                        
            {
                tasks.length===0
                ? <p className="text-info">There isn't any Task</p>
                : tasks.map(item=><Todo key={item.key} todo={item} deleteTodo={deleteTodo} changeTodoStatus={changeTodoStatus} editTodo={editTodo}></Todo>)
            }
        </>
    )
    
}
export default TodoList;