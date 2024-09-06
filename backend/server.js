import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js';
import messageRoute from './routes/message.route.js'
import cookieParser from 'cookie-parser';
import { connect } from './db/connect.js';
import { protectedRoute } from './middlewares/protectedRoute.js';
dotenv.config();

const app = express();
const  PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("hello")
});
app.use('/api/auth',authRoute)
app.use('/api/messages',protectedRoute,messageRoute)
app.listen(PORT,()=>{
    connect(),
    console.log(`app is listening on por ${PORT}`)
})