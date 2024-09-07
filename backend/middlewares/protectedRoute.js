import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protectedRoute =async (req,res,next) =>{
    try{
    
    const token = req.cookies.jwt;
    if(!token){
        return res.status(401).json({error:"Unautrorized. No token provided"});
    }
    const decode = jwt.verify(token,process.env.JWT_SECRET);
    if(!decode){
        return res.status(401).json({error:"Unauthorized. Invalid token"});
    }
    const user = await User.findById(decode.userId).select("-password")
    if(!user){
        return res.status(404).json({error:"User Not Found"})
    }
     req.user = user
     console.log(user)
    next();
    }
    catch(err){
        console.log("Error in protected middleware ",err.message);
        return res.status(500).json({error:"Internal Server Error"})
    }
}