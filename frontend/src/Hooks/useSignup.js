import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/Authcontext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()
  const signUp = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender
  });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        mode:'cors',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          username,
          password,
          confirmPassword,
          gender,
        }),

      });
      const data = await res.json();
      console.log(data);
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user",JSON.stringify(data))
      setAuthUser(data)

    } catch (error) {
      console.log(error)
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
   
  };
  return {signUp,loading}
};
export default useSignup;

const handleInputErrors = ({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) => {
  console.log(fullName)
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all requirement");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Password confirmation do not match");
    return false;
  }
  return true;
};
