import React, { useContext } from "react";

//import contexts
import AuthContext from "../../Contexts/AuthContext";

function Header(){

    const authContext =useContext(AuthContext)
    const doLogin = ()=>{authContext.dispatch({type:"login"})};
    const doLogout = ()=>{authContext.dispatch({type:"logout"})};

    return(
        <header>
            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                    <strong>Todo App</strong>
                    </a>
                    {
                        !authContext.authenticated
                        ?<button className="btn btn-primary" onClick={doLogin}>Login</button>
                        :<button className="btn btn-danger" onClick={doLogout}>Logout</button>

                    }
                    
                </div>
            </div>
        </header>
    );
}
export default Header;
