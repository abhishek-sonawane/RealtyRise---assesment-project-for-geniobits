import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
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
       <div className="container px-6 py-12 h-screen">
<div className="flex justify-center items-center flex-col flex-wrap h-full gap-6 text-gray-800">
<h2 className=' text-2xl p-6'> Register</h2>

<div className="md:w-8/12 lg:w-5/12 lg:ml-20">

 {/* new form */}
<form onSubmit={registerSubmit}>
{/* name input */}
 <div className="mb-6">
   <input
     type="text"
     className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     onChange={onSubmitFormChange} id="name" value={name} placeholder='name'
     />
 </div>

     {/* <!-- Email input --> */}
 <div className="mb-6">
   <input
     type="email"
     className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     onChange={onSubmitFormChange} id="email" value={email} placeholder='email'
     />
 </div>
 {/* <!-- Password input --> */}
 <div className="mb-6">
   <input
     type="password"
     className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
     onChange={onSubmitFormChange} id="password" value={password} placeholder='password'
     />
 </div>


 
 <button
className="inline-block px-7 py-3  bg-AppYellow-100 text-slate-600 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow-400 hover:shadow-lg focus:bg-yellow-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-400 active:shadow-lg transition duration-150 ease-in-out w-full"
data-mdb-ripple="true"
data-mdb-ripple-color="light"
>
Register
</button>
  <p className='text-xl p-4' >already have an account? <Link className='underline' to='/sign-in' >Sign in</Link></p>
     </form>
    

</div>

</div>
</div>  

        
    </div>
  )
}




export default Signup