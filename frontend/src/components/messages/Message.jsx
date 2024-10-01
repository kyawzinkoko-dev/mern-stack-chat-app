import { Socket } from "socket.io";
import {  useAuthContext } from "../../contexts/Authcontext";
import useListenMessage from "../../Hooks/useListenMessage";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

export default function Message({message}) {
  const {authUser} =useAuthContext() 
  console.log(message)
  const {selectedConversation} = useConversation()
  useListenMessage();
  const fromMe = message.senderId ===authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' :''
  const shakeClass= message.shouldShake ? 'shake' :''

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={`${profilePic}`} alt={`${authUser.fullName}`} />
          </div>
        </div>
        <div className={`${bubbleBgColor} chat-bubble  text-white ${shakeClass} `}>{message.message}</div>
        <div className="chat-footer  opacity-50 text-xs">{extractTime(message.createdAt)}</div>
      </div>
     
    </>
  );
}
