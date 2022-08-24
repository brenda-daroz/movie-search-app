
import Search from "../components/search/Search"
import { useState, useEffect } from 'react'


function Home() {

  const [movies, setMovies] = useState([])
  const API_KEY = '439baa475bab7ee26968174cbfe4007a'



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
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