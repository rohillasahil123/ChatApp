import React from 'react'
import Message from "./Message";
import Reply from './Reply';

const Chat = () => {
  return (
    <>
    <div className='flex  justify-center '>
        <div className='border h-[500px] w-[30%]  shadow-xl mt-[30px] '>
        <div className='w-full h-[60px] border '>
            <h1 className='font-bold text-2xl mt-[10px] ml-[80px] ' >Chating <span className='text-green-500'>Application</span></h1>
        </div>
        <Reply/>
        <Message/>
        </div>
     
    </div>
  
    </>
  )
}

export default Chat
