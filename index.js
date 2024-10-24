import express, { json, urlencoded } from "express";
import cors from "cors";
import cookieSession from "cookie-session";


const app = express();

app.use(json({limit:"10mb"}))
app.use(urlencoded({extended:true,limit:"10mb"}))
app.use(cors({ origin:"http://localhost:3000",credentials:true}))
app.use(cookieSession({
    name: "session",
    keys: [`agjhcgajkagdjkfd aghsdjkfgaf`],
    maxAge: 24 * 7 * 3600000,
    secure: process.env.config !== 'developement'
}))


app.listen(4000,()=>{
    console.log("start server on port 4000")
})


app.get("/test",(_req,res)=>{
    res.cookie("token", "test", {
        secure: true, expires: new Date(Date.now() + 1000 * 60 * 2), sameSite: "None", maxAge: 1000 * 60 * 2, path: "/" })
    res.send("done")
})