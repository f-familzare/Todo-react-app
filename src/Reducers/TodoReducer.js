function TodoReducer(state,action) {
    console.log(action,'actionnnnnnnnnnnnnnnnnn')
    switch (action.type) {
        case "add":
            return addTodo; 
            break;
        case "editTodo":
            return editTodo;
        case "deleteTodo":
            return deleteTodo;
        case "changeTodoStatus":
            return changeTodoStatus;
        default:
            return state
            break;
    }
}

const addTodo = (state , action) => {
    console.log(action,'pppppppppppppppp')
    let { text } = action.payload;
    console.log(text,'00000000')
    return {
        ...state,
        todos : [
            ...state.todos,
            { key : Date.now() , done : false , title:text }
        ]
    }
}

const editTodo=(state,action)=>{
    let {key , text}=action.payload
    let task=state.todos.find(item=>item.key===key);
    task.title=text;
    let newTodos=state.todos.filter(item=>item.key!==key)
    return({
        ...state,
        todos:[
            ...newTodos,
            task
        ]
    })
}

const deleteTodo = (state,action)=>{
        let {key}=action.payload
        return{
            ...state,
            todos:state.todos.filter(item=>item.key!==key)
        }
}

const changeTodoStatus=(state,action)=>{
    let {key}=action.payload
    let task=state.todos.find(item=>item.key===key);
    task.done=!task.done;
    let newTodos=state.todos.filter(item=>item.key!==key)
    return({
        ...state,
        todos:[
            ...newTodos,
            task
        ]
    })
}

export default TodoReducer;


// const addTodo=(text)=>{
//     setTodos(prevState=>{
//         return{todos:[
//             ...prevState.todos,
//             {key:Date.now(),done:false,title:text}
//         ]}
//     })
// }
// const editTodo=(key,text)=>{
//     let task=todos.todos.find(item=>item.key===key);
//     task.title=text;
//     let newTodos=todos.todos.filter(item=>item.key!==key)
//     setTodos({
//         todos:[
//             ...newTodos,
//             task
//         ]
//     })
// }
// const deleteTodo = (key)=>{
//     setTodos(prevState=>{
//         return{
//             todos:prevState.todos.filter(item=>item.key!==key)
//         }
//     })
// }

// const changeTodoStatus=(key)=>{
//     let task=todos.todos.find(item=>item.key===key);
//     task.done=!task.done;
//     let newTodos=todos.todos.filter(item=>item.key!==key)
//     setTodos({
//         todos:[
//             ...newTodos,
//             task
//         ]
//     })
// }
