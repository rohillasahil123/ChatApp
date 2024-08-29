import { useEffect, useRef , useState } from "react";
import Chat from "./components/Chat";
import Reply from "./components/Reply";
import Message from "./components/Message"


export default function App() {
  const [messages, setMessages] = useState([]);
      const messagesEndRef = useRef(null)

      const addMessage = (msg) => {
        setMessages(prevMessages => [...prevMessages, { text: msg, length: msg.length }]);
    }


  useEffect(()=>{
   scrollToBottom();
  },[messages])


    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }


  return (
  <>  
  
    <Chat/>
    <Reply messages={messages} />
    <div ref={messagesEndRef} />
    <Message addMessage={addMessage} />
  </>
  )
}