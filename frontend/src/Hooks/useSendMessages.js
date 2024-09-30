import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, setMessages, messages } = useConversation();
  const sendMessages = async (message) => {
    console.log(messages)
    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation?._id}`,
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({message}),
        }
      );
      const data =await res.json();
      console.log(data)
      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
      } catch (e) {
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
  };
  return { sendMessages, loading };
};
export default useSendMessage;
