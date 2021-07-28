const express = require('express');

const router = express.Router();

const subscriptionsBL = require('../bl/subscriptionsbl');


router.route('/').get(async function(req,resp)
{
   let subscriptions = await subscriptionsBL.getAllsubscriptions()
   return resp.json(subscriptions)
})

router.route('/:id').get(async function(req,resp)
{
   let subscription = await subscriptionsBL.Getsubscription(req.params.id)
   return resp.json(subscription)
})

router.route('/byUserId/:id').get(async function(req,resp)
{
   let subscriptions = await subscriptionsBL.getsubscriptionsByUserId(req.params.id)
   return resp.json(subscriptions)
})

router.route('').post(async function(req,resp)
{
   let obj = req.body
   let status = await subscriptionsBL.Addsubscription(obj)
   return resp.json(status)
})


router.route('/:id').put(async function(req,resp)
{
   let obj = req.body
   let id = req.params.id
   let status = await subscriptionsBL.Updatesubscription(id,obj)
   return resp.json(status)
})

router.route('/:id').delete(async function(req,resp)
{
   let id = req.params.id
   let status = await subscriptionsBL.Deletesubscription(id)
   return resp.json(status)
})

module.exports = router;