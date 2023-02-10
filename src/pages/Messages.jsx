import React, { useContext, useEffect } from 'react'
import GlobalContext from '../context/GlobalContext'


function Messages() {
  const {messageHistory,getMessageHistoryList  } = useContext(GlobalContext)
  useEffect(()=>{
    getMessageHistoryList()
  },[])
  return (
    <div className='h-screen flex flex-col '>
      <h2 className='text-center text-2xl font-bold p-5 ' >Contact History</h2>
      {/* show history of messages */}
      {messageHistory&&messageHistory.length>0?messageHistory.map(item=>{
        return (
         
          <div className=" flex flex-col pl-10 pt-1 w-full bg-slate-200 h-20 rounded hover:bg-slate-400 transition-all p-10 text-slate-800 ">
            <p className='text-xl font-semibold'>{item.name}</p>
            <p>{item.email}</p>
            </div> 
         
        
        )
      }):<>no message history</>}

    </div>
  )
}

export default Messages