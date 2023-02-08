import React, { useContext, useEffect, useState } from 'react'
import {collection,getDocs,where,limit,startAfter,orderBy,query} from 'firebase/firestore'
import { arrayUnion,arrayRemove, updateDoc,doc } from 'firebase/firestore'
import { db,auth } from '../firebase.config'
import { useNavigate,Link } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'
import { toast } from 'react-toastify'
import UseStateAuth from '../hooks/UseStateAuth'
import Footer from '../components/Footer'
import Listings from '../components/Listings'
import RedirectToSignin from './RedirectToSignin'

function ExplorePage() {
    const navigate = useNavigate()
    const {isLoggedin,loading} = UseStateAuth()
    // const [listings,setListings] = useState([])
    const [search,setSearch] = useState('')

    const {listings,getListing,savetoFeed,removefromFeed} = useContext(GlobalContext)

   const filteredList =  listings.filter((item)=> 
    item.data.name.toLowerCase().includes(search)||
    item.data.location.toLowerCase().includes(search)
 )

    const submitSearch =(e)=>{
       try {
        e.preventDefault()
        

         
       } catch (error) {
        console.log(error)
       }
    }


    const navigateToListing =(id)=>{
        navigate(`/explore/${id}`)
    }

    useEffect(()=>{

    getListing()
    }
    ,[])
    // <p>please <Link to='/sign-in' >login</Link> to continue</p>
    if(!isLoggedin) return <RedirectToSignin />
    if(loading)return (<p>loading...</p>)
    
    if(isLoggedin)return (
        <div className='p-10 text-center flex flex-col gap-8 bg-base-200 h-screen'>
            {/* search bar */}
           <form onSubmit={submitSearch}>
           <input placeholder='search for listings' className="input input-bordered  w-full max-w-xs" type="text" name="" id="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
           {/* <button>search</button> */}
           </form>
    
            {/* show property listing here */}
            
          <Listings filteredList={filteredList} navigateToListing={navigateToListing} savetoFeed={savetoFeed} removefromFeed={removefromFeed} />
    
            {/* footer */}
            <Footer />
        </div>
      )

}

export default ExplorePage