import  { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

export default function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
 
  useEffect(() => {
    const getMessages = async () => {
        setLoading(true)
      try {
        const res = await fetch(`/api/messages/${selectedConversation?._id}`);
        const data = await res.json();
        console.log(data)
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    };
    if(selectedConversation?._id) getMessages();

  }, [selectedConversation?._id,setMessages]);

  return {messages,loading};
}
