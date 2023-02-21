import '../styles/post.css'
import {db} from '../config/firebase'
import {addDoc,collection,query, where,getDocs} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'

export const Posts=(props)=>{
    const {post}=props
    const [user]=useAuthState(auth)
    const [likes,setLikes]=useState(0)
    const navigate=useNavigate()

    const likesColl=collection(db,"likes")
    const likesDoc=query(likesColl,where("postid","==",post.id))

    const getLikes=async()=>{
        const data= await getDocs(likesDoc)
        setLikes(data.docs.length)
    }
    useEffect(()=>{
        getLikes()
    },[])
    const addLike=async ()=>{
        await addDoc(likesColl,{
            userid:user.uid,
            postid:post.id
        })
        setLikes(likes+1)
        console.log("Posted to db")
        navigate("/")
    }


    return (
        <div className='post'>
            <div className="post-title"><p>{post.title}</p></div>
            <div className="descr"><p>{post.descr}</p></div>
            <div className="user">
                <p>@{post.username}</p>
                <button onClick={addLike}>&#10084;</button>
                <p>Likes {likes}</p>
            </div>
        </div>
    )
}