import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/Authcontext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (username, password) => {
    const success = handleInputErrors(username,password)
    if(!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      console.log(data)
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (e) {
      toast.error(e.message);
    } finally {
      setLoading(false);
    }
  };
  return {loading,login}
};
export default useLogin;

const handleInputErrors = (username,password)=>{
    console.log(username,password)
    if(!username ||!password){
        toast.error("Please fill all requirements");
        return false
    }
    return true;

}