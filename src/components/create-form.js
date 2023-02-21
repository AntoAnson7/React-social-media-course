import '../styles/create-form.css'

import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {addDoc,collection} from 'firebase/firestore'
import {db} from '../config/firebase'
import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

export const CreateForm=()=>{
    const navigate=useNavigate()
    const [user]=useAuthState(auth)

    const schema=yup.object().shape({
        title:yup.string().required("Title is required"),
        descr:yup.string("Description is required").max(50).required()
    })

    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:yupResolver(schema)
    })
    const coll=collection(db,"posts")
    const onSubmit=async (data)=>{
        await addDoc(coll,{
            title: data.title, //..data 
            descr: data.descr,
            username:user?.displayName,
            id:user?.uid
        })
        console.log("Posted to db")
        navigate("/")
    }

    return (
        <>
        <form className='create-form' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Title" {...register("title")}/>
            {errors.title?<p className='err'>{errors.title.message}</p>:""}
            <textarea type="descr" placeholder="Description" {...register("descr")}/>
            {errors.descr?<p className='err'>{errors.descr.message}</p>:""}
            <input className='sub-btn' type="submit"/>
        </form>
        </>
    )
}