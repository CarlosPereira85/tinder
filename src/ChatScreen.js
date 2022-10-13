import Header from "./Header";
import { useState } from "react";
import  "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen ()  {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
    

    

        {
            name: "Ellen",
            image: "...",
            message: "Whats up"
        },
        {
            name: "Ellen",
            image: "...",
            message: "how is it going"
        },
        {
            name: "Ellen",
            image: "...",
            message: "Whooo"
        },
        {
            name: "Ellen",
            image: "...",
            message: "Whats up"
        },
        {
            message:"Hi! how are you allen"
        }
        
    ])
    
const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, {message: input}]);
    setInput("");
};


  return (
    <>
    <Header backButton="/chat"  />

    <div className="chatScreen"> 
        <p className="chatScreen__timestamp ">YOU MATCHED WITH ELLEN </p>

      {messages.map((message) => (
        message.name ? (
            <div className= "chatScreen__message" >
                <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
                />

               <p className="chatScreen__text">{message.message}</p>
            </div>

            

        ) : (
            <div className="chatScreen__message">
                <p className="chatScreen__textUser">{message.message}</p>
            </div>
         
        )
        
        ))}
    </div>
    
        <form className="chatScreen__input" >
            <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a message" type="text" />
            <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
    
        
        </>

    );
}

        
export default ChatScreen