import React ,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
//import Components
import Header from './Layouts/Header';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function App(){
    const [todos,setTodos]=useState({todos : []})
    const addTodo=(text)=>{
        setTodos(prevState=>{
            return{todos:[
                ...prevState.todos,
                {key:Date.now(),done:false,title:text}
            ]}
        })
    }
    const editTodo=(key,text)=>{
        let task=todos.todos.find(item=>item.key===key);
        task.title=text;
        let newTodos=todos.todos.filter(item=>item.key!==key)
        setTodos({
            todos:[
                ...newTodos,
                task
            ]
        })
    }
    const deleteTodo = (key)=>{
        setTodos(prevState=>{
            return{
                todos:prevState.todos.filter(item=>item.key!==key)
            }
        })
    }

    const changeTodoStatus=(key)=>{
        let task=todos.todos.find(item=>item.key===key);
        task.done=!task.done;
        let newTodos=todos.todos.filter(item=>item.key!==key)
        setTodos({
            todos:[
                ...newTodos,
                task
            ]
        })
    }
    return(
        <div className="App">
          <Header/>  
        <main>
          <section className="jumbotron">
            <div className="container d-flex flex-column align-items-center">
                <h1 className="jumbotron-heading">Welcome!</h1>
                <p className="lead text-muted">To get started, add some items to your list:</p>
                <AddTodo add={(text)=>addTodo(text)}/>
            </div>
          </section>
          <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        <TodoList todos={todos} deleteTodo={(key)=>deleteTodo(key)} changeTodoStatus={(key)=>changeTodoStatus(key)} editTodo={(key,text)=>editTodo(key,text)} />
                    </div>
              
                </div>
          </div>
        </main>
    </div>
    )
}
export default App;