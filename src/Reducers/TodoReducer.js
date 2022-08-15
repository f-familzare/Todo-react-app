function TodoReducer(state,action) {
    switch (action.type) {
        case "add":
            return addTodo(state,action); 
            break;
        case "editTodo":
            return editTodo(state,action);
        case "deleteTodo":
            return deleteTodo(state,action);
        case "changeTodoStatus":
            return changeTodoStatus(state,action);
        case "login":
            return login(state,action);
        case "logout":
            return logout(state,action)
        default:
            return state
            break;
    }
}

function addTodo (state , action){
    // let { text } = action.payload;
    let { todo } = action.payload;
    return {
        ...state,
        todos : [
            ...state.todos,
            todo
            // { key : Date.now() , done : false , title:text }
        ]
    }
}

function editTodo (state,action){
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

function deleteTodo (state,action){
        let {key}=action.payload
        return{
            ...state,
            todos:state.todos.filter(item=>item.key!==key)
        }
}

function changeTodoStatus (state,action){
    let { key } = action.payload
    let task = state.todos.find(item => item.key === key)
    task.done=!task.done
    let newTodos = state.todos.filter(item => item.key !== key)

    return {
        ...state,
        todos : [
            ...newTodos,
            task
        ]
    } 
}

function login(state,action) {
    return {
        ...state,
        authenticated:true
    }
}

function logout(state,action) {
    return {
        ...state,
        authenticated:false
    }
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
