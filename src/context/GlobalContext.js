import { createContext } from "react";
import { useState,useEffect } from "react";
import { db,auth } from '../firebase.config'
import { doc,getDoc,getDocs,collection,arrayUnion,arrayRemove, updateDoc } from 'firebase/firestore'
// import {where,limit,startAfter,orderBy,query} from 'firebase/firestore'

import { toast } from 'react-toastify'

const GlobalContext = createContext("");

export const ContextProvider =({children})=>{
    const [listings,setListings] = useState([])
    const [savedFeed,setSavedfeed] = useState([])

    // get saved listings array
    const getSaved = async()=>{
        try {
          const docRef = doc(db, "users", auth.currentUser.uid);
         const querySnapShot = await getDoc(docRef)
         console.log(querySnapShot.data())
         setSavedfeed(querySnapShot.data().savedListing)
      } catch (error) {
          console.log(error)
          toast.error('something went wrong')
      }
      }


      //get all listings
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

    //saveFeed removefeed functions 
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

    


    return (
        <GlobalContext.Provider
        value={{getSaved,savedFeed,getListing,listings,savetoFeed,removefromFeed}}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext;