
import Search from "../components/search/Search"
import { useState, useEffect } from 'react'
import axios from 'axios';


function Home() {


  const [movies, setMovies] = useState([])

  useEffect(() => {
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query="avatar"`
    );
    setMovies(data.results);
  };
  fetchMovies();
}, []);


  return (
    <Search movies={movies} />
  )

}

export default Home





//   const handleInputChange = e => {
//     setQuery(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={query} onChange={handleInputChange} />
//       <ul>
//         {movies.map(movie => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;
