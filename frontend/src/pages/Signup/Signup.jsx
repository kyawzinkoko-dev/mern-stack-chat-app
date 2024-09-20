import GenderCheckbox from "./GenderCheckbox";

export default function Signup() {
  return (
    <div className="flex flex-col justify-center items-center min-w-96   mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0 backdrop-filter backdrop-blur-lg">
        <h1 className="font-semibold text-3xl text-center text-gray-300">
          Signup
          <span className="text-blue-500">Chat App</span>
        </h1>
        <div>
          <label htmlFor="" className="label p-2">
            <span className="text-base label-text">Full Name</span>
          </label>
          <input
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
            type="text"
            placeholder="Confirm Password"
            className="w-full input input-bordered  h-10"
          />
        </div>
        <GenderCheckbox/>
        <a
          href="#"
          className="text-sm mt-t hover:text-blue-500 hover:underline inline-block"
        >
          Already have an account?
        </a>
        <button className="btn btn-block mt-2 btn-sm">Signup</button>
      </div>
      <div></div>
    </div>
  );
}
