import React from 'react'

const Reply = (messages) => {
  if (!Array.isArray(messages)) {
    return null;
}
  return (
    <div className='h-[20px] w-[60%] bg-gray-700 '>
      {messages.map((message, index) => (
        <div key={index} className='message-item'>
          <p>{message.text}</p>
          <small>Length: {message.length}</small>
        </div>
      ))}
    </div>
  )
}

export default Reply
