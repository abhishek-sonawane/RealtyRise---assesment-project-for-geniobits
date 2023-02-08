import React, { useEffect, useState } from 'react'
import {collection,getDocs,where,limit,startAfter,orderBy,query} from 'firebase/firestore'
import { arrayUnion,arrayRemove, updateDoc,doc } from 'firebase/firestore'
import { db,auth } from '../firebase.config'
import { useNavigate,Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import UseStateAuth from '../hooks/UseStateAuth'
import Footer from '../components/Footer'

function ExplorePage() {
    const navigate = useNavigate()
    const {isLoggedin,loading} = UseStateAuth()
    const [listings,setListings] = useState([])
    const [search,setSearch] = useState('')

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
    const savetoFeed=async(item)=>{
        try {
            const arrayref = doc(db,'users',auth.currentUser.uid)
            await updateDoc(arrayref,{
                savedListing: arrayUnion(item)
            })
            toast.success('added to savedlist')
        } catch (error) {
            
        }
    }
    const removefromFeed=async(item)=>{
        try {
            const arrayref = doc(db,'users',auth.currentUser.uid)
            await updateDoc(arrayref,{
                savedListing: arrayRemove(item)
            })
            toast.success('removed from savedlist')
        } catch (error) {
            
        }
    }

    const navigateToListing =(id)=>{
        navigate(`/explore/${id}`)
    }

    useEffect(()=>{
    const getListing = async()=>{
        try {
            const listingRef = collection(db,'listings')
           const querySnapShot = await getDocs(collection(db,'listings'))
           const list =[]
           querySnapShot.forEach(item=>{
            console.log(item.data())
            list.push({
                id:item.id,
                data:item.data()
            })
           })
           setListings(list)
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
        }
    }
    getListing()
    }
    ,[])
    if(!isLoggedin) return <p>please <Link to='/sign-in' >login</Link> to continue</p>
    if(loading)return (<p>loading...</p>)
    
    if(isLoggedin)return (
        <div className='p-10 text-center flex flex-col gap-8 bg-base-200 h-screen'>
            {/* search bar */}
           <form onSubmit={submitSearch}>
           <input placeholder='search for listings' className="input input-bordered  w-full max-w-xs" type="text" name="" id="search" value={search} onChange={(e)=>setSearch(e.target.value)} />
           {/* <button>search</button> */}
           </form>
    
            {/* show property listing here */}
            
            {filteredList&&filteredList.length>0?filteredList.map((ite)=>{
                return (
                <div className='flex flex-row justify-center gap-8 w-full bg-base-200 '>
                    <div className="card  bg-base-100 shadow-xl  ">
                            {/* {ite.data.imgUrls&&<figure><img src={ite.data.imgUrls[0]} width='90' alt="Shoes" /></figure>} */}
                                <div className="card-body">
                                    <h2 className="card-title">{ite.data.name}</h2>
                                    <p>{ite.data.location}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={()=>{navigateToListing(ite.id)}} >more details</button>
                                        <button className="btn btn-secondary" onClick={()=>savetoFeed(ite)}>save to feed</button>
                                        <button className="btn btn-secondary" onClick={()=>removefromFeed(ite)}>remove from feed</button>
                                    </div>
                                </div>
                    </div>
                </div>)
            }):<>no listings present</>}
    
            {/* footer */}
            <Footer />
        </div>
      )

}

export default ExplorePage