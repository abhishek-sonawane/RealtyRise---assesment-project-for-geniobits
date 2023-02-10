import React, { useContext } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { db,auth } from '../firebase.config'
import { doc,getDoc,updateDoc,arrayUnion } from 'firebase/firestore'
import GlobalContext from '../context/GlobalContext'
import { toast } from 'react-toastify'


function SingleListing() {
    const params = useParams()
    const navigate = useNavigate()
    const [listing,setlisting] = useState(null)
    const {getMessageHistoryList,savetoMsgHistory} = useContext(GlobalContext)
    useEffect(()=>{

        getMessageHistoryList()
        getSingleListing()
    },[params.listingId])

    const getSingleListing =async ()=>{
     try {
      const docref = doc(db,'listings',params.listingId)
      const querySnapshot = await getDoc(docref)
      console.log(querySnapshot.data())
      setlisting(querySnapshot.data())
     } catch (error) {
      toast.error('cant get listing :(')
     }
      }

    if(listing){

    return(
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  {listing.imgUrls&&<img src={listing.imgUrls[0]} className="max-w-sm rounded-lg shadow-2xl width='100'" alt="" />}
    
    <div>
      <h1 className="text-5xl font-bold">{listing.name}</h1>
      <h3 className='text-3xl font-semibold ' >{listing.location}</h3>
      <p className="py-6">{listing.regularPrice?listing.regularPrice:''}</p>
      <button className="btn btn-primary" onClick={()=>{savetoMsgHistory(listing.owner)}}> <a href={`mailto:${listing.owner.email}?subject=SendMail&body=Description`}>contact seller</a></button>
    </div>
  </div>
    

</div>
       
      )
  }
}

export default SingleListing