import { useSocketContext } from "../../contexts/SocketContext"
import useConversation from "../../zustand/useConversation"


export default function Conversation({conversation,emoji,lastIdx}) {
   const {selectedConversation,setSelectedConversation} = useConversation()
    const {onlineUsers} = useSocketContext()
    const isSelected = selectedConversation?._id ===conversation._id
    const isOnline = onlineUsers.includes(conversation._id)
    console.log(onlineUsers)
   return (
    <>
        <div onClick={()=>setSelectedConversation(conversation)} className={`flex items-center gap-2 hover:bg-sky-500  rounded px-2 py-1 cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`}>
            <div className={` avatar ${isOnline ?'online ' :''}  `}>
                <div className='rounded-ful w-12'>
                    <img src={conversation.profilePic} alt={`${conversation.fullName}_avatar`}/>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex justify-between gap-3'>
                    <p className=' font-bold text-gray-300'>{conversation.fullName}</p>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </div>
      {!lastIdx &&  <div className='my-0 py-0 divider  h-1'/> }
    </>
  )
}
