import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router-dom'
import UseStateAuth from '../hooks/UseStateAuth'

function ProtectedRoute() {
    const {isLoggedin,loading} = UseStateAuth()
    if(loading) return <>signin first
    <Link to='/sign-in'>signin</Link>
    </>
  return  isLoggedin?<Outlet />:<Navigate to='/sign-in' />
 
 
}

export default ProtectedRoute