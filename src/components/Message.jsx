import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";


const Message = ({addmessage}) => {
    const [msg, setMsg] = useState({})
  



    const handelChange = (e) => {
        const { name, value } = e.target
        setMsg({ ...msg, [name]: value })
        // console.log(msg)
    }

    const messageHandel = (e) => {
        if (typeof msg === 'string' && msg.trim() !== "") {
            addmessage(msg);
            setMsg(""); // Clear the input field after sending the message
        }
        }
        
    return (
        <>
            <div className='w-[full] h-[40px] mt-[397px] flex '>
                <input type="text" className='border ml-[15px]  h-[40px] w-[80%] rounded'
                    placeholder='Message Typing hare .... ' onChange={handelChange} value={msg.value} name='Message' />
                <IoSend className='w-[30px] h-[50px] ml-[10px] ' autoComplete="none"  onClick={messageHandel} />
            </div>
        </>
    )
}

export default Message
