const express = require('express');
const router = express.Router();
const MembersBL = require('../bl/membersbl');


router.route('/').get(async function(req,resp)
{
   try{
   let members = await MembersBL.getAllMembers()
   return resp.json(members)
   }
   catch
   {
      console.log("error")
   }
})

router.route('/:id').get(async function(req,resp)
{
   let member = await MembersBL.GetMember(req.params.id)
   return resp.json(member)
})

router.route('').post(async function(req,resp)
{
   let obj = req.body
   let status = await MembersBL.AddMember(obj)
   return resp.json(status)
})


router.route('/:id').put(async function(req,resp)
{
   let obj = req.body
   let id = req.params.id
   let status = await MembersBL.UpdateMember(id,obj)
   return resp.json(status)
})

router.route('/:id').delete(async function(req,resp)
{
   let id = req.params.id
   let status = await MembersBL.DeleteMember(id)
   return resp.json(status)
})

module.exports = router;