import { BsSend } from "react-icons/bs";

export default function MessageInput() {
  return (
    <form>
      <div className="px-4 my-2">
        <div className="w-full relative">
          <input
            className="text-sm border focus:outline-none focus:border-blue-900  border-gray-600 block text-white  rounded-lg w-full p-2.5"
            placeholder="Send a message"
          />
          <button
            className=" absolute inset-y-0 end-0 items-center pe-3 "
            type="submit"
          >
            <BsSend />
          </button>
        </div>
      </div>
    </form>
  );
}
