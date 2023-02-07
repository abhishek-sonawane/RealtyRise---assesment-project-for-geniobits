import React, { useState } from 'react'
import { auth } from '../firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Signin() {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        email:'',
        password:''
    })

    const onFormChange = (e)=>{
        setFormData((prev)=>(
            {...prev,
            [e.target.id] : e.target.value
            }
        ))
    }


    const loginSubmit =async(e)=>{
        try {
            e.preventDefault()
           const userCredentials = await signInWithEmailAndPassword(auth,email,password)
           if(userCredentials.user){
            navigate('/')
           }
        } catch (error) {
            if(error.message =='Firebase: Error (auth/wrong-password).'){

                toast.error('wrong password')
            }
            if(error.message =='Firebase: Error (auth/user-not-found).'){

                toast.error('no such user exist')
            }
        }
    }
    const {email,password} = formData
  return (
    <div>
        <form onSubmit={loginSubmit} >
            <input type="email" name="" value={email} onChange={onFormChange} id="email" />
            <label htmlFor="email"></label>

            {/* password */}

            <input type="password" name="" value={password} onChange={onFormChange} id="password" />
            <label htmlFor="password">password</label>

            <button  >login</button>
        </form>
    </div>
  )
}

export default Signin