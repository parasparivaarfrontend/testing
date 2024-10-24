import express, { json, urlencoded } from "express";
import cors from "cors";
import session from 'express-session';



const app = express();

app.use(json({limit:"10mb"}))
app.use(urlencoded({extended:true,limit:"10mb"}))
app.use(cors({ origin:"https://chipper-cassata-7e72ee.netlify.app",credentials:true}))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))


app.listen(4000,()=>{
    console.log("start server on port 4000")
})


app.get("/test",(_req,res)=>{
    res.cookie("token", "test", {
        secure: true, expires: new Date(Date.now() + 1000 * 60 * 2), sameSite: "none", maxAge: 1000 * 60 * 2 })
    res.send("done")
})