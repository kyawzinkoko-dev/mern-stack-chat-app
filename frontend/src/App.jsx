import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./contexts/Authcontext";
function App() {
  const {authUser} = useAuthContext()
  return (
    
    <>
      <div className="p-4 h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={authUser ?  <Home/> : <Navigate to='/login' />} />
          <Route path="/login" element={authUser ?  <Navigate to='/'/>: <Login />} />
          <Route path="/signup" element={authUser ? <Navigate to='/'/> :<Signup/>} />
        </Routes>
      <Toaster/>
      </div>
    </>
  );
}

export default App;
