const axios = require('axios');


GetMovies = ()=>
{
        return axios.get('https://api.tvmaze.com/shows')
            .then(response => {
              return response.data
            }).catch((err)=>{
              console.log("error:",err)})
}
module.exports= {GetMovies}


