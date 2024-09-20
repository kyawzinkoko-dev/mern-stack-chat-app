export default function Login() {
  return (
    <div className="flex justify-center flex-col min-w-96  mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding bg-opacity-0 backdrop-filter backdrop-blur-lg">
        <h1 className="font-semibold text-3xl text-center text-gray-300">
          Login
          <span className="text-blue-500">Chat App</span>
        </h1>
        <form action="">
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
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
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered  h-10"
            />
          </div>
          <a href="#" className="text-sm mt-t hover:text-blue-500 hover:underline inline-block">{"Don't have"} an account</a>
        <div> <button className="btn btn-block mt-2 btn-sm">Login</button></div>
        </form>
      </div>
    </div>
  );
}
