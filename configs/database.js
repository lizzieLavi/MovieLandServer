const mongoose = require('mongoose');
const uri = "mongodb+srv://lizzieLavi:olishuk2089@subscriptions.1h47i.mongodb.net/SubscriptionsDB?retryWrites=true";


mongoose.connect(uri).then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("error:",err);
})

