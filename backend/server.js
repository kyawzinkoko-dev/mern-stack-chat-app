import express from 'express'
import dotenv from 'dotenv'
import  cors from 'cors'
import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js'
import cookieParser from 'cookie-parser';
import { connect } from './db/connect.js';
import { protectedRoute } from './middlewares/protectedRoute.js';
import userRoute from './routes/user.route.js'
import { server,app } from './socket/socket.js';

dotenv.config();

const  PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hello")
});
app.use('/api/auth',authRoute)
app.use('/api/messages',protectedRoute,messageRoute)
app.use('/api/users',protectedRoute,userRoute)
server.listen(PORT,()=>{
    connect(),
    console.log(`app is listening on por ${PORT}`)
})