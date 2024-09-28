import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../Hooks/useSignup";

export default function Signup() {
  const [inputs, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { signUp, loading } = useSignup();
  const checkBoxChange = (gender) => {
    setInput({ ...inputs, gender: gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  };
  return (
    <div className="flex flex-col justify-center items-center min-w-96   mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0 backdrop-filter backdrop-blur-lg">
        <h1 className="font-semibold text-3xl text-center text-gray-300">
          Signup
          <span className="text-blue-500">Chat App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              value={inputs.fullName}
              onChange={(e) =>
                setInput({ ...inputs, fullName: e.target.value })
              }
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              value={inputs.username}
              onChange={(e) =>
                setInput({ ...inputs, username: e.target.value })
              }
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={inputs.password}
              onChange={(e) =>
                setInput({ ...inputs, password: e.target.value })
              }
              type="text"
              placeholder="Enter password"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInput({ ...inputs, confirmPassword: e.target.value })
              }
              type="text"
              placeholder="Confirm Password"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={checkBoxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to="/login"
            className="text-sm mt-t hover:text-blue-500 hover:underline inline-block"
          >
            Already have an account?
          </Link>
          <button
            disabled={loading}
            className="btn btn-block mt-2 btn-sm"
            type="submit"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Sign up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
