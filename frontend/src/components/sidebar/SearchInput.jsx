import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useGetConversation } from "../../Hooks/useGetConversation";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
export default function SearchInput() {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const {conversation} = useGetConversation()
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search)return;
    if(search.length <3){
    return  toast.error("Search term must be at least 3 characters long")
    }
    const conversations = conversation.find(c=>c.fullName.toLowerCase().includes(search.toLocaleLowerCase()))
    if(conversations){
      setSelectedConversation(conversations);
      setSearch("")
    }
    else{
      toast.error("No such user found")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
}
