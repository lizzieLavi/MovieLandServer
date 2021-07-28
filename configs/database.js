const mongoose = require('mongoose');
const uri = "mongodb://lizzieLavi:olishuk2089@subscriptions-shard-00-00.yihyu.mongodb.net:27017,subscriptions-shard-00-01.yihyu.mongodb.net:27017,subscriptions-shard-00-02.yihyu.mongodb.net:27017/SubscriptionsWS?ssl=true&replicaSet=atlas-lvwe93-shard-0&authSource=admin&retryWrites=true&w=majority";


mongoose.connect(uri).then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("error:",err);
})

