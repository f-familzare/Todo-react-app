import React ,{useEffect, useReducer, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
//import Images
import Loader from "./../Images/Infinity-1s-200px.gif"

//import Components
import Header from './Layouts/Header';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

//import contexts
import TodoContext from "../Contexts/TodoContext";
import AuthContext from "../Contexts/AuthContext";
//import Reducers
import TodoReducer from "../Reducers/TodoReducer";

function App(){
    // const [todos,setTodos]=useState({todos : []})

    const [state,dispatch]=useReducer(TodoReducer,{
        todos : [],
        authenticated:false
    })

    const [loading,setLoading]=useState(false);

    const jsonHandler = (data)=>{
        const todos = Object.entries(data).map(([key,value])=>{
            return{
                ...value,
                key
            }
        })
        setLoading(false);
        dispatch({type:"initTodos",payload:{todos}})
    }

    useEffect(()=>{
        setLoading(true)

        axios.get('/todos.json')
        .then(response=> {
          // handle success
          console.log(jsonHandler(response.data));
        })
        .catch( (error)=>{
          // handle error
          console.log(error);
        })
    },[])
    return(
        <AuthContext.Provider value={{ 
            authenticated : state.authenticated,
            dispatch
        }}>
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
                                        {
                                        loading
                                        ?<img
                                            src={Loader}
                                            alt="loading"
                                        />
                                        :<TodoList/>
                                        }
                                    </div>
                            
                                </div>
                        </div>
                        </main>
                    </div>
            </TodoContext.Provider>
        </AuthContext.Provider>

    )
}
export default App;