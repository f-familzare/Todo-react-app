import React ,{useState , useReducer} from "react";
import 'bootstrap/dist/css/bootstrap.css'
//import Components
import Header from './Layouts/Header';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

//import contexts
import TodoContext from "../Contexts/TodoContext"
import TodoReducer from "../Reducers/TodoReducer";

function App(){
    // const [todos,setTodos]=useState({todos : []})

    const [state,dispatch]=useReducer(TodoReducer,{
        todos : [],
        authenticated:false
    })
    console.log(state.todos)
    return(
        <TodoContext.Provider value={{
            todos: state.todos,
            dispatch
            // todos:todos,
            // add:(text)=>addTodo(text),
            // deleteTodo:(key)=>deleteTodo(key),
            // changeTodoStatus:(key)=>changeTodoStatus(key),
            // editTodo:(key,text)=>editTodo(key,text)
        }}> 
        <div className="App">
            <Header/>  
            <main>
            <section className="jumbotron">
                <div className="container d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                    <AddTodo/>
                </div>
            </section>
            <div className="todosList">
                    <div className="container">
                        <div className="d-flex flex-column align-items-center ">
                            <TodoList/>
                        </div>
                
                    </div>
            </div>
            </main>
        </div>
        </TodoContext.Provider>


    )
}
export default App;