
import { useState, useEffect } from 'react'

function Movies() {
    const [movies, setMovies] = useState([])
    const API_KEY = '439baa475bab7ee26968174cbfe4007a'



    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then((response) => response.json())
            .then(data => {
                console.log(data.results)
                setMovies(data.results)
            })
    }, [])

    return (
        <>
            {movies}
        </>
    )

}

export default Movies