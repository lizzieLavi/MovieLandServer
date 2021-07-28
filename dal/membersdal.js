const axios = require('axios');


GetMembers = ()=>
{
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
              return response.data
            })
}
module.exports= {GetMembers}

