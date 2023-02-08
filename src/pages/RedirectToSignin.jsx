import React from 'react'
import { Link } from 'react-router-dom'

function RedirectToSignin() {
  return (
    <div className='h-screen'>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Sign in to continue</h1>
      <p className="py-6">signin to use all the features of the app.</p>
     <Link to='/sign-in'>
     <button className="btn btn-primary">go to sign in</button>
     </Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default RedirectToSignin