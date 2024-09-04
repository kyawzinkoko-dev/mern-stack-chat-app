import express from 'express'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js';
import { connect } from './db/connect.js';
dotenv.config();

const app = express();
const  PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello")
});
app.use('/api/auth',authRoute)
app.listen(PORT,()=>{
    connect(),
    console.log(`app is listening on por ${PORT}`)
})