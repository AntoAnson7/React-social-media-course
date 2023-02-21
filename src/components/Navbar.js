import { Link } from "react-router-dom"
import '../styles/navbar.css'
import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth"

export const Navbar=()=>{
    const [user]=useAuthState(auth)
    const signout =async()=>{
        await signOut(auth)
    }
    return (
        <>
        <div className="navbar">
            <div className="title">PostWall</div>
            <div className="links">
                <Link to="/">Home</Link>
                {!user?<Link to="/login">Login</Link>:<Link to="/create">Create</Link>}
            </div>
            <div className="user-info">
                <p>{user?.displayName ||"Not Signed In"}</p>
                <img className="pfp" src={user?.photoURL || ""}/>
                <button className="signout" onClick={signout}></button>
            </div>
        </div>
        </>
    )
}