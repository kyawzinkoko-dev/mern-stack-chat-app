import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessage } from "react-icons/ti";
export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //clear the selected conversation in component ummount 
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className="flex flex-col md:min-w-[450px]">
          <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className=" label-text">To : </span>{" "}
              <span className="text-gray-800 font-bold">
                {selectedConversation.fullName}
              </span>
            </div>
            <Messages />
            <MessageInput />
          </>
        </div>
      )}
    </>
  );
}

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-between  h-full w-full">
      <div className="px-4 sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcom John Doe</p>
        <p>Select A chat to start messaging</p>
        <TiMessage className="text-2xl text-center md:text-6xl" />
      </div>
    </div>
  );
};
