import { useGetConversation } from '../../Hooks/useGetConversation'
import { getRandomEmoji } from '../../utils/emoji'
import Conversation from './Conversation'

export default function Conversations() {
  const {conversation,loading} = useGetConversation()

  return (
    <div className='flex flex-col py-2 overflow-auto'>
      {
        conversation.map((conversation,idx)=>(
          <Conversation key={conversation._id} conversation={conversation} emoji = {getRandomEmoji()} lastIdx={idx == conversation.length -1} />
        ))
      }
        {loading && <span className='loading loading-spinner'></span>}
    </div>
  )
}
