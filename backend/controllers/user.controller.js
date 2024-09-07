import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
    try{
        const loginUser = req.user._id;
        const filteredUsers = await User.find({_id:{$ne:loginUser}})
        return res.status(200).json(filteredUsers);
    }
    catch(err){
        console.log("Error in user controller ",err.message)
        return res.status(500).json({error:"Internal Server Error"})
    }
}