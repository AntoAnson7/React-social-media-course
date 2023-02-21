import {getDocs,collection, doc} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import {Posts} from '../components/posts'
import '../styles/postmain.css'

export const Main=()=>{
    const coll=collection(db,"posts")
    const [posts,setPosts]=useState(null)

    const getPosts=async()=>{
        const data=await getDocs(coll)
        setPosts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    useEffect(()=>{
        getPosts()
    },[])

    return (
        <>
        <div>
            <h1>Home</h1>
            {posts?.map((post)=>(
                <div className='postmain'>
                <Posts post={post}/>
                </div>
            ))}
        </div>
        </>
    )
}