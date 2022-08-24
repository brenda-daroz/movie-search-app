import './Card.css'
import { Link } from 'react-router-dom'

const DEFAULT_PLACEHOLDER_POSTER = "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1-300x450.jpg"

function Card({ movie }) {

    const moviePoster = "https://image.tmdb.org/t/p/w500" + movie.poster_path === "" ? DEFAULT_PLACEHOLDER_POSTER : "https://image.tmdb.org/t/p/w500" + movie.poster_path
    const movieTitle = movie.title

    return (
        <div className='card'>
            <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                className='card-link'
            >
                <div className='container'>
                    <img src={moviePoster} alt='' />
                    <h2>{movieTitle}</h2>
                </div>
            </Link >
        </div>
    )
}

export default Card