// import React, { useState } from "react"
import './TodoApp.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogoutComponet from "./LogoutComponet";
import WelcomeComponet from "./WelcomeCompont";
import ListComponent from "./ListComponent";
import ErrorComponent from "./ErrorComponent";
import HeaderComponent from "./HeaderComponent"
import LoginComponent from "./LoginComponent"
import FooterComponent from "./Footer"
import AuthProvider, { useAuth } from './Security/AuthContext';
// import LogoutComponet from "./LogoutComponet";

function AuthenticatedRoute( {children} ){
    const authContext = useAuth()
    if( authContext.isAuthenticated){
    return children;
    }else{
        return(
            <Navigate to="/" />
        )
    }
}



export default function TodoApp(){
    return(
        <>
            <div className="TodoApp">
                <AuthProvider>
                    <BrowserRouter>
                        <HeaderComponent/>
                            <Routes>
                                <Route path="/" element={ <LoginComponent/> }></Route>
                                <Route path="/login" element={ <LoginComponent/> }></Route>
                                <Route path="/welcome/:uName" element={ 
                                <AuthenticatedRoute>
                                    <WelcomeComponet/> 
                                </AuthenticatedRoute>
                                }></Route>
                                <Route path="/todo-list" element={ <ListComponent/> } />
                                <Route path="/logout" element={ 
                                <AuthenticatedRoute>
                                    <LogoutComponet/> 
                                </AuthenticatedRoute>
                                } />
                                <Route path="*" element={ <ErrorComponent/> }></Route>
                            </Routes>
                    </BrowserRouter>
                        <FooterComponent/>
                </AuthProvider>
                {/* <LoginComponent/> */}
                {/* <WelcomeComponet/> */}
            </div>
        </>
    )
}









