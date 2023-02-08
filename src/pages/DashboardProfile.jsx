import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import UseStateAuth from '../hooks/UseStateAuth'
import { db,auth } from '../firebase.config'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { signOut } from 'firebase/auth'


function DashboardProfile() {
  const navigate = useNavigate()
  // const [savedFeed,setSavedfeed] = useState([])
  const {isLoggedin,loading} = UseStateAuth()
  const {savedFeed,getSaved,removefromFeed} = useContext(GlobalContext)

  const logoutButton =async()=>{
       await auth.signOut()
      navigate('/')
  }
  useEffect(()=>{
    getSaved()

    console.log('he')
  },[])



 return(
    <div>

<div className="hero min-h-screen w-3/4 mx-auto bg-base-200">
  <div className="hero-content flex-col lg:flex-col">


    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src="https://img.freepik.com/free-psd/3d-illustration-person_23-2149436192.jpg?w=740&t=st=1675843994~exp=1675844594~hmac=7820e92ad2c3460ed45f3dfca0b23bcb0806e8996e6d82dd404318bab3788ed9" />
      </div>
    </div>

   
    <div>
      <h1 className="text-5xl font-bold">welcome, {auth.currentUser.displayName}</h1>
      <p className="py-6">{auth.currentUser.email}</p>
      <button className="btn btn-primary" onClick={logoutButton}>logout</button>
    </div>

      <div className='p-2 mb-10'>
        <h3 className='text-2xl p-3' >saved listings</h3>
        <div className='flex flex-col gap-2 '>
      {savedFeed&&savedFeed.map(item=>{
        return(
            // <p>{item.data.name}</p>
       <Link className='z-20' to={`/explore/${item.id}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                  <div className="card-actions justify-end">
                    <button onClick={(e)=>{e.preventDefault()
                      removefromFeed(item)}} className=" z-30 btn btn-square btn-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>
              <p className='text-xl'>{item.data.name}.</p>
            </div>
        </div>
       </Link>
        )
      })}
      </div>
      </div>
      
      
  </div>
</div>

    </div>
  )
}

export default DashboardProfile