const MemberModel = require('../models/membersmodel')
const MembersDAL = require('../dal/membersdal')

const getMembersFromExternalWS =async  function()
{
   let members =await  MembersDAL.GetMembers();
   members.forEach(member =>
    {
        let addMem = {
            Name: member.name,
            Email: member.email,
            City: member.address.city
        }
        AddMember(addMem)
    })

}

const getAllMembers = function()
{

      return new Promise((resolve,reject) =>
      {
          MemberModel.find({},function(err,members)
          {
              if(err)
                reject(err)

              else
              resolve(members)

          })
      })

}

const GetMember = function(id)
{
    return new Promise((resolve,reject) =>
    {
        MemberModel.findById(id,function(err,member)
        {
            if(err)
              reject(err)

            else
            resolve(member)

        })
    })
    
}

const AddMember = function(member)
{
    return new Promise((resolve,reject) =>
    {
        const m = new MemberModel({
            Name : member.Name,
            Email : member.Email,
            City : member.City
        });

        m.save(function(err)
        {
            if(err)
              reject(err)

            else
            resolve('created!')

        })
    })
    
    
}

const DeleteMember = function(id)
{
    return new Promise((resolve,reject) =>
    {
      
       MemberModel.findByIdAndDelete(id,function(err)
            {
              if(err)
                 reject(err)

              else
                resolve('Deleted!')
            })
    })
    
}

const UpdateMember = function(id,member)
{

    return new Promise((resolve,reject) =>
    {
      
       MemberModel.findByIdAndUpdate(id,
            {
                Name: member.Name,
                Email: member.Email,
                City: member.City
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

module.exports = {getAllMembers,GetMember,UpdateMember,DeleteMember,AddMember,getMembersFromExternalWS}
