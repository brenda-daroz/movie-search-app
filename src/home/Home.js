
import Search from "../components/search/Search"
import { useState, useEffect } from 'react'


function Home() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then(data => {
        console.log(data.results)
        setMovies(data.results)
      })
  }, [])

  return (
    <Search details={movies} />
  )

}

export default Home
