import generateTokenAndSetCookie from "../utils/generateToken.js";
import User from "./user.model.js";
import bcrypt from 'bcryptjs'

export const loginUser = async (req, res) => {
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
    console.log("Error in auth controller", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
