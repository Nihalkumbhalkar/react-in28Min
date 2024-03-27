import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Security/AuthContext";



export default function LoginComponent(){
    
    const [getUserName, setUserName] = useState('');
    const [getPassword, setPassword] = useState('');
    const [getSuccessMessage, setSuccessMessage] = useState(false);
    const [getErrorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();
    
    const authContext = useAuth();

    // console.log(authContext);

    function handleUsernameChange(event){
        // console.log(event.target.value);
        setUserName(event.target.value)
    }

    function handlePasswordChange(event){
        // console.log(event.target.value);
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(authContext.login(getUserName, getPassword)){
            setSuccessMessage(true);
            setErrorMessage(false);
            navigate(`/welcome/${getUserName}`);
        }
        else{
            // setSuccessMessage(false);
            setErrorMessage(true);
        }
    }
    
    // function SuccessMessage(){
    //     if(getSuccessMessage){
    //         return <div className="loginSucess">Authentication is successful</div>  
    //     }
    //     return null;
        
    // }
    
    // function ErrorMessage(){
    //     if(getErrorMessage){
    //         return <div className="loginFail">Authentication is Failed</div>
    //     }
    //     return null;
    // }

    return(
        <>
        <div className="Login">
            <h1>Login to your account</h1>
            { getErrorMessage && <div className="loginFail">Authentication is Failed</div>}
            {/* <SuccessMessage />
            <ErrorMessage /> */}
            <div className="LoginForm">
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input type="text" name="userName" value={getUserName} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"  name="password" value={getPassword} onChange={handlePasswordChange}/>
                </div>
               <div>
                    <button type="button" name="login" onClick={handleSubmit} >Login</button>
               </div>
            </div>
            
            
            </div>
        </>
    )
}
