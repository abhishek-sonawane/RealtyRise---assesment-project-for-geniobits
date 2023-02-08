import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function Listings({filteredList,navigateToListing}) {
    const {savetoFeed,removefromFeed} = useContext(GlobalContext)
  return (
    <div>
          <div className='flex flex-col justify-center gap-8 p-8 bg-base-200 '>
            {filteredList&&filteredList.length>0?filteredList.map((listingItem)=>{
                return (
                    <Link to={`/explore/${listingItem.id}`}>
                    <div className="card  bg-base-100 shadow-xl  ">
                            {/* {ite.data.imgUrls&&<figure><img src={ite.data.imgUrls[0]} width='90' alt="Shoes" /></figure>} */}
                                <div className="card-body">
                                    <h2 className="card-title">{listingItem.data.name}</h2>
                                    <p className=' text-left'>{listingItem.data.location}</p>
                                    <p className='text-left' >{listingItem.data.regularPrice}{
                                        listingItem.data.type=='rent'?'/month':'price'
                                    }</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary" onClick={()=>{navigateToListing(listingItem.id)}} >more details</button>
                                        <button className="btn btn-secondary" onClick={(e)=>{ e.preventDefault()
                                            savetoFeed(listingItem)}}>save to feed</button>
                                        <button className="btn btn-secondary" onClick={(e)=>{e.preventDefault()
                                            removefromFeed(listingItem)}}>remove from feed</button>
                                    </div>
                                </div>
                    </div>
                    </Link>
                )
            }):<>no listings present</>}
        </div>
    </div>
  )
}

export default Listings