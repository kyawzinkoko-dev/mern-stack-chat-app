import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);
  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        console.log(data)
        if (data.error) {
          throw new Error(data.error);
        }
        setConversation(data);
      } catch (e) {
        console.log(e.message);
        toast.error(e.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversation };
};
