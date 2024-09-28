import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {loading,login} = useLogin()

  const Login =async (e)=>{
    e.preventDefault()
    await login(username,password)
  }
  return (
    <div className="flex justify-center flex-col min-w-96  mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0 backdrop-filter backdrop-blur-lg">
        <h1 className="font-semibold text-3xl text-center text-gray-300">
          Login
          <span className="text-blue-500">Chat App</span>
        </h1>
        <form action="" onSubmit={Login}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <Link
            to="/signup"
            className="text-sm mt-t hover:text-blue-500 hover:underline inline-block"
          >
            {"Don't have"} an account
          </Link>
          <div>
            
            <button className="btn btn-block mt-2 btn-sm" disabled={loading}>{loading ? <span className="loading loading-spinner"></span> : "Login"} </button>
          </div>
        </form>
      </div>
    </div>
  );
}
