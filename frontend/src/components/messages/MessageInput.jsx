import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../Hooks/useSendMessages";

export default function MessageInput() {
  const [message,setMessage] = useState("")

  const {sendMessages,loading} = useSendMessage()
  const handleMessage =async (e) =>{
    e.preventDefault();
    if(!message)return;
    await sendMessages(message)
    setMessage("")
  }
  return (
    <form onSubmit={handleMessage}>
      <div className="px-4 my-2">
        <div className="w-full relative">
          <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
            className="text-sm border focus:outline-none focus:border-blue-900  border-gray-600 block text-white  rounded-lg w-full p-2.5"
            placeholder="Send a message"
          />
          <button
            className=" absolute inset-y-0 end-0 items-center pe-3 "
            type="submit"
          >
            {loading ? <span className="loading loading-spinner"></span> : <BsSend />}
          </button>
        </div>
      </div>
    </form>
  );
}
