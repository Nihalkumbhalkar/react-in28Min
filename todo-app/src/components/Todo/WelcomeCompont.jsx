import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";



function WelcomeComponet(){

    const [getData, setData] = useState()

    function callHelloWorldRestApi(){
        axios.get("http://localhost:8080/hello-world")
        .then(( response )=> successfulResponce(response) )
        .catch((error) => errorResponce(error))
        .finally( ()=> console.log("cleanup"))
    }

    function successfulResponce(response){
        console.log(response);
        
    }

    function errorResponce(error){
        console.log(error);
    }


    const {uName} = useParams(); 

    return(
        <div className="Welcome">
           <h1> Welcome {uName} to your account </h1>
         <div><Link to="/todo-list"> Click here </Link> to see your todo list </div> 
        <div>
            <button className="btn btn-success m-4" onClick={callHelloWorldRestApi}>Call rest api</button>
        </div> 
        </div>
    )
}

export default WelcomeComponet;
