const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/Node_signup")
.then(()=>{
  console.log("mongodb connected");
})

.catch(()=>{
  console.log("to connected")
})

const LoginSchema = new mongoose.Schema({
  name: { type: String, required: true,  },
  password: { type: String, required: true },
});



const collection=new mongoose.model("Collection1",LoginSchema)

module.exports=collection
