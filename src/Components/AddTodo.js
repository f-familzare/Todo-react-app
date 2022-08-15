import React ,{useState , useContext} from "react";
import axios from "axios";
import AuthContext from "../Contexts/AuthContext";
import TodoContext from "../Contexts/TodoContext";

function AddTodo(){
    const todoContext=useContext(TodoContext)
    const authContext=useContext(AuthContext)
    const add=todoContext

    const [formInput,setFormInput]=useState({formInput:''})
    const formHandler=(event)=>{
        event.preventDefault();
        // دیتای ایجکس را اینجا ارسال می کنیم در reducer

        let todo = {done:false,title:formInput}
        axios.post('https://todo-react-app-3dd32-default-rtdb.firebaseio.com//todos.json', todo)
          .then((response) => {
            todoContext.dispatch({type:'add',payload:{todo:{...todo,key:response.data.name}}})
          })
          .catch((error)=>{
            console.log(error);
          });
        // todoContext.dispatch({type:'add',payload:{text:formInput}})
        setFormInput({formInput:''})
    }
    const inputHandler=(event)=>{
        setFormInput(event.target.value)
    }
    return(
    <>
    {
        authContext.authenticated
        ?
        <form className="form-inline" onSubmit={formHandler}>
            <div className="form-group">
                <input type="text" className="form-control mx-sm-3" placeholder="I want to do ..." onChange={inputHandler} value={formInput.formInput}/>
                <button type="submit" className="btn btn-primary">add</button>
            </div>
        </form>
        :<p> You must do login</p>
    }
        
    </>

    )
}
export default AddTodo;