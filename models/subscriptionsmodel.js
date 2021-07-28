const mongoose = require('mongoose');


let subscriptionSchema = new mongoose.Schema({

    MemberId: mongoose.Schema.Types.ObjectId,
    Movies: Array
})

module.exports = mongoose.model('subscriptions',subscriptionSchema);
