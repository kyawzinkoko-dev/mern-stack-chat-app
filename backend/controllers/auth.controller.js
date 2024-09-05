import generateTokenAndSetCookie from "../utils/generateToken.js";
import User from "./user.model.js";
import bcrypt from 'bcryptjs'

export const signUpUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password do not match." });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exit" });
    }
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const salt =await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt)  
    const newUser = new User({
      fullName,
      username,
      password:hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if(newUser){
        generateTokenAndSetCookie(newUser._id,res);
        await newUser.save();

    return res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePic: newUser.profilePic,
    });
    }
    else{
        return res.status(500).json({error:"Invalid user data"});
    }
  } catch (err) {
    console.log("Error in signup auth controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const loginUser = async(req,res)=>{
    try{
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect =await bcrypt.compare(password,user?.password || "");
      console.log(isPasswordCorrect)
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"})
        }
        generateTokenAndSetCookie(user._id,res)

         res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
          });
    }
    catch (err) {
        console.log("Error in login auth controller", err.message);
        res.status(500).json({ error: "Internal Server Error" });
      }
}

export const logout =async (req,res) =>{
  try{
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"Logout successfully"})
  }
  catch(err){
    console.log("Error in logout auth controller", err.message);
        res.status(500).json({ error: "Internal Server Error" });
  }
}