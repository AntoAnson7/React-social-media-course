import {auth,provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login=()=>{
    const navigate=useNavigate();
    const googleSignin=async ()=>{
        try{
            const res=await signInWithPopup(auth,provider)
            navigate("/")
        }
        catch(e){
            console.log("Sign in with google Failed "+e)
        }
    }
    return (
        <>
        <h1>Login</h1>
        <p>Signin with google</p>
        <button onClick={googleSignin}>Sign In with google</button>
        </>
    )
}