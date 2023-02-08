import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <footer className="footer fixed bottom-0 left-0 bg-base-100 shadow-inner  text-neutral-content">
          <div className=" w-full flex flex-row gap-0">
            <NavLink to='/' className=" p-4 text-center text-slate-800 flex-auto text-xl">explore</NavLink>
            <NavLink to='/messages' className="p-4  text-center text-slate-800 flex-auto text-xl">messages</NavLink>
            <NavLink to='/profile' className="p-4  text-center text-slate-800 flex-auto text-xl">profile</NavLink>
          </div>
  </footer>
  </div>
  )
}

export default Footer