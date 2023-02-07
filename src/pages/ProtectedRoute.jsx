import React, { useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute() {
    const [loggedIn,setLoggedIn] = useState(true)
  return  loggedIn?<Outlet />:<Navigate to='/sign-in' />
 
 
}

export default ProtectedRoute