
import Card from "../card/Card";
import './SearchList.css'
import { useState } from "react";



function SearchList({ filteredMovies }) {

    const [count, setCount] = useState(9)

    const addMore = () => {
        setCount(count + 9)
    }

    const filtered = filteredMovies.map(movie => <Card key={movie.id} movie={movie} />)

    return (
        <>
            <div className="filtered-movies">{filtered.slice(0, count)}</div>
            <div class="btn-container">
                <div class="center">
                    <button class="btn" onClick={addMore}>
                        See More
                    </button>
                </div>
            </div>
        </>
    )
}

export default SearchList
