import { useEffect, useRef } from "react";
import useGetMessages from "../../Hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import Message from "./Message";

export default function Messages() {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef()
  console.log(lastMessageRef)
  useEffect(()=>{
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])
  return (
    <div className=" flex-1 px-4 overflow-auto">
      {!loading &&
        messages.length >0 &&
        messages.map((message, idx) => 
        <div key={idx} ref={lastMessageRef}>
          <Message  message={message} />
        </div>
        )}
      {loading && 
        Array(3)
          .fill()
          .map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start conversation</p>
      )}
    </div>
  );
}
