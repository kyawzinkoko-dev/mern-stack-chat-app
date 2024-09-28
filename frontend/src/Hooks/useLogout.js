import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/Authcontext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()
  const logout = async () => {


    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },


      });
      const data = await res.json();
      console.log(data);
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.removeItem("chat-user",JSON.stringify(data))
      setAuthUser(null)

    } catch (error) {
      console.log(error)
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
   
  };
  return {logout,loading}
};
export default useLogout;


