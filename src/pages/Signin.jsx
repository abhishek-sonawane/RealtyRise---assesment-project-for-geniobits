import React, { useState } from 'react'
import { auth } from '../firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {toast} from 'react-toastify'
import { useNavigate,Link } from 'react-router-dom'


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
    <div className="container px-6 py-12 h-screen">
         <div className="flex justify-center items-center flex-col flex-wrap h-full gap-6 text-gray-800">
        <h2 className=' text-2xl p-6'> sign-in</h2>

        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
          {/* <!-- Email input --> */}

          {/* new form */}
    <form onSubmit={loginSubmit}>

          <div className="mb-6">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Email address"
              value={email} onChange={onFormChange} id="email"
              />
          </div>

          {/* <!-- Password input --> */}
          <div className="mb-6">
            <input
              type="password"
              className="input input-bordered w-full"
              placeholder="Password"
              value={password} onChange={onFormChange} id="password"
              />
          </div>
   
          <button
                    className="btn border-transparent inline-block px-7 py-3 bg-AppYellow-100 text-slate-600 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-400 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    >
                    Sign in
                    </button>
                    <p className='text-xl p-4' >Dont have an account? <Link className='underline' to='/register' >Register</Link></p>

    </form>
            
    </div>

</div>
</div>
  )
}

export default Signin