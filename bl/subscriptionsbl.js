const { Mongoose } = require('mongoose')
const subscriptionsModel = require('../models/subscriptionsmodel')


const getAllsubscriptions = function()
{

      return new Promise((resolve,reject) =>
      {
        subscriptionsModel.find({},function(err,subscriptions)
          {
              if(err)
                reject(err)

              else
              resolve(subscriptions)

          })
      })

}

const Getsubscription = function(id)
{
    return new Promise((resolve,reject) =>
    {
        subscriptionsModel.findById(id,function(err,subscription)
        {
            if(err)
              reject(err)

            else
            resolve(subscription)

        })
    })
    
}

const Addsubscription = function(subscription)
{
    return new Promise((resolve,reject) =>
    {
        const s = new subscriptionsModel({
             MemberId: subscription.MemberId,
             Movies: subscription.Movies
             
        });

        s.save(function(err)
        {
            if(err)
              reject(err)

            else
            resolve('created!')

        })
    })
    
    
}

const Deletesubscription = function(id)
{
    return new Promise((resolve,reject) =>
    {
      
        subscriptionsModel.findByIdAndDelete(id,function(err)
            {
              if(err)
                 reject(err)

              else
                resolve('Deleted!')
            })
    })
    
}

const Updatesubscription = function(id,subscription)
{

    return new Promise((resolve,reject) =>
    {
      
          subscriptionsModel.findByIdAndUpdate(id,
            {
                MemberId: subscription.MemberId,
                Movies: subscription.Movies
            },
            function(err)
            {
              if(err)
                 reject(err)

              else
                resolve('Updated!')
        })
    })
}

const getsubscriptionsByUserId = function(memberid)
{

      return new Promise((resolve,reject) =>
      {
        subscriptionsModel.find({'MemberId':memberid},function(err,subscriptions)
          {
              if(err)
                reject(err)

              else
              resolve(subscriptions)

          })
      })

}

module.exports = {getAllsubscriptions,Getsubscription,Updatesubscription,Deletesubscription,Addsubscription,getsubscriptionsByUserId}
