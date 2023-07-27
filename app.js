const express= require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const collection=require("./src/mongoosedb")
const extended = require("it/lib/extended")

const tempelatePath=path.join(__dirname,'../tempelates')


app.use(express.json())
app.set("view engine","ejs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
	res.render("login")
})

app.get("/signup",(req,res)=>{
	res.render("signup")
})

app.post("/login",async (req,res)=>{

const data={
	name:req.body.email,
	password:req.body.password
}
  
await collection.insertMany([data])

res.render("Home")

})


app.listen(8000,()=>{
	console.log("connected")
	
})
