const mongoose = require('mongoose');
const uri = "mongodb+srv://lizzieLavi:olishuk2089@cluster0.1h47i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


mongoose.connect(uri).then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("error:",err);
})

