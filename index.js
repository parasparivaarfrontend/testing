import express, { json, urlencoded } from "express";
import cors from "cors";


const app = express();

app.use(json({limit:"10mb"}))
app.use(urlencoded({extended:true,limit:"10mb"}))
app.use(cors({ origin:"http://localhost:3000",credentials:true}))


app.listen(4000,()=>{
    console.log("start server on port 4000")
})


app.get("/test",(_req,res)=>{
    res.cookie("token", "test", { secure: true, expires: new Date(Date.now() + 1000 * 60 * 60) })
    res.send("done")
})