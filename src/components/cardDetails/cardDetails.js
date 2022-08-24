
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import './cardDetails.css'

const DEFAULT_PLACEHOLDER_POSTER = "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-300x450.jpg"


function CardDetails() {
   const API_KEY = '439baa475bab7ee26968174cbfe4007a'

   const [movie, setMovie] = useState([])

   const movieBackdrop = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path === "" ? DEFAULT_PLACEHOLDER_POSTER : "https://image.tmdb.org/t/p/w500" + movie.backdrop_path
   const movieTitle = movie.title
   const movieOverview = movie.overview

   let params = useParams()
   console.log(params)

   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${API_KEY}&language=en-US`)
         .then((response) => response.json())
         .then(data => {
            console.log(data)
            setMovie(data)
         })
   }, [params.movieId])


   return (
      <div className="card-details">
         <img className="card-details__img" src={movieBackdrop} alt='' />
         <h1 className="card-details__title">
            {movieTitle}
         </h1>
         <p className="card-details__overview">{movieOverview}</p>

      </div>
   );
};

export default CardDetails