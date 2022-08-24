import './Search.css'
import { useState } from 'react'
import SearchList from '../searchList/SearchList'
import { FaSearch } from 'react-icons/fa';

function Search({details}) {

    const [searchBar, setSearchBar] = useState('')

    const filteredMovies = details.filter(
        movie => {
            return (
                movie
                .title
                .toLowerCase()
                .includes(searchBar.toLowerCase()) 
            )
        }
    )

    const handleChange = e => {
        setSearchBar(e.target.value)
    }

    function searchList() {
        return (
            <SearchList filteredMovies={filteredMovies}/>
        )
    }

    return (
        <main>
            <div className="wrap">
                <div className="search">
                <input 
                type="text" 
                className="searchTerm" 
                placeholder="Type a movie title"
                onChange={handleChange}
                />
                <button type="submit" className="searchButton">
                <div className='search-icon'><FaSearch/></div>
                </button>
                </div>
            </div>
                <>
                {searchList()}
                </>
        </main>
        
    )
}

export default Search