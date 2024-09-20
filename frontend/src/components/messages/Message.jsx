export default function Message() {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://avatar.iran.liara.run/public/girl" />
          </div>
        </div>
        <div className="chat-bubble bg-blue-500 text-white ">Hey! What up</div>
        <div className="chat-footer  opacity-50 text-xs">12:43</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src="https://avatar.iran.liara.run/public/girl" />
          </div>
        </div>
        <div className="chat-bubble bg-blue-500 text-white ">Hey! What up</div>
        <div className="chat-footer  opacity-50 text-xs">12:43</div>
      </div>
    </>
  );
}
