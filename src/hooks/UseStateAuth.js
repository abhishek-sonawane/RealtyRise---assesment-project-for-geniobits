import { useState, useEffect } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";


const UseStateAuth =()=>{
    const [isLoggedin,setLoggedin] = useState(false)
    const [loading,setloading] = useState(true)
    
    
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setLoggedin(true)
                setloading(false)
            }
        })
    })    

    return {isLoggedin,loading}
}


export default UseStateAuth;