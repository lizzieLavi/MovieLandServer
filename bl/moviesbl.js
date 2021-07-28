const MovieModel = require('../models/moviesmodel')
const MoviesDAL = require('../dal/moviesdal')

const getMoviesFromExternalWS =async  function()
{
   let movies =await  MoviesDAL.GetMovies();
   movies.forEach(movie =>
    {

        let addMov = {
            Name: movie.name,
            Genres: movie.genres,
            Image: movie.image.original,
            Premiered: movie.premiered,
            summary: movie.summary,
            Runtime: movie.Runtime
        }

        AddMovie(addMov)
    })

}

const getAllMovies = function()
{

      return new Promise((resolve,reject) =>
      {
          MovieModel.find({},function(err,movies)
          {
              if(err)
                reject(err)

              else
              resolve(movies)

          })
      })

}

const GetMovie = function(id)
{
    return new Promise((resolve,reject) =>
    {
        MovieModel.findById(id,function(err,movie)
        {
            if(err)
              reject(err)

            else
            resolve(movie)

        })
    })
    
}

const AddMovie = function(movie)
{

    return new Promise((resolve,reject) =>
    {
        const m = new MovieModel({
            Name: movie.Name,
            Genres: movie.Genres,
            Image: movie.Image,
            Premiered: movie.Premiered,
            summary: movie.summary,
            Runtime: movie.Runtime
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

const DeleteMovie = function(id)
{
    return new Promise((resolve,reject) =>
    {
      
       MovieModel.findByIdAndDelete(id,function(err)
            {
              if(err)
                 reject(err)

              else
                resolve('Deleted!')
            })
    })
    
}

const UpdateMovie = function(id,movie)
{

    return new Promise((resolve,reject) =>
    {
      
       MovieModel.findByIdAndUpdate(id,
            {
                Name: movie.Name,
                Genres: movie.Genres,
                Image: movie.Image,
                Premiered: movie.Premiered,
                summary: movie.summary,
                Runtime: movie.Runtime
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

module.exports = {getAllMovies,GetMovie,UpdateMovie,DeleteMovie,AddMovie,getMoviesFromExternalWS}
