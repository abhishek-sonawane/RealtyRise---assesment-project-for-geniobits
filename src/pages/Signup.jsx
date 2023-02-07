import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { db , auth } from '../firebase.config'
import { doc,setDoc,getDoc,serverTimestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'

function Signup() {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:''
    })

    const {name,email,password} = formData
    const onSubmitFormChange = (e)=>{
        setFormData((prev)=>(
            {
                ...prev,
                [e.target.id]:e.target.value
            }
        ))
    }
    const registerSubmit =async(e)=>{
        try{
            e.preventDefault()
        const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
        const user = userCredentials.user
        await updateProfile(auth.currentUser,{
            displayName:name
        })
        const formDataCopy = {...formData}
        delete formDataCopy.password
        formDataCopy.serverTimestamp = serverTimestamp()
        await setDoc(doc(db,'users',user.uid),formDataCopy)
        navigate('/sign-in')
        }catch(err){
            console.log(err)
            toast.error('user already exists')
        }
    }
  return (
    <div>
        <form onSubmit={registerSubmit}>
            <input type="text" name="" onChange={onSubmitFormChange} id="name" value={name} placeholder='name' />

            <input type="email" name="" onChange={onSubmitFormChange} id="email" value={email} placeholder='email' />


            <input type="password" name="" onChange={onSubmitFormChange} id="password" value={password} placeholder='password' />
            <button>register</button>
        </form>
    </div>
  )
}

export default Signup