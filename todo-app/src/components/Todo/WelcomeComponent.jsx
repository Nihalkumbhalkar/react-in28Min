import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";



function WelcomeComponent(){

    const [data, setData] = useState()

    function callHelloWorldRestApi(){
        axios.get("http://localhost:8080/hello-world")
        .then(( response )=> setData(response.data) )
        .catch((error) => errorResponce(error))
        .finally( ()=> console.log("cleanup"))
    }

    // function successfulResponce(response){
    //     console.log(response);
        
    // }

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
        <div>{data}</div>
        </div>
    )
}

export default WelcomeComponent;
