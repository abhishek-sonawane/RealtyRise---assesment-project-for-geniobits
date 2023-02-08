import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router-dom'
import UseStateAuth from '../hooks/UseStateAuth'
import RedirectToSignin from './RedirectToSignin'

function ProtectedRoute() {
    const {isLoggedin,loading} = UseStateAuth()
    if(loading&&!isLoggedin) return <RedirectToSignin />
    if(loading) return <>loading...</>

  return  isLoggedin?<Outlet />:<Navigate to='/sign-in' />
 
 
}

export default ProtectedRoute