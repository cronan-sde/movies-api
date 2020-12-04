const env = require('dotenv').config();
const axios = require('axios');
let search = "kanye";
const IMDB_URL = `https://imdb-api.com/en/API/SearchMovie/${process.env.IMDB_KEY}/${search}`;

  axios.get(IMDB_URL).then(res => {
   
    const movies = res.data.results;
    movies.forEach(movie => {
      console.log(movie.title);
    })

  }).catch(err => {
    console.log(err);
  })