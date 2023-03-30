import './Search.css'
import { useState } from 'react'
import SearchList from '../searchList/SearchList'
import { FaSearch } from 'react-icons/fa';

function Search({ movies, input }) {

  const [searchBar, setSearchBar] = useState('')

  const filteredMovies = movies.filter(
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


  return (
    <main>
      <div className="wrap">
        <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="Type a movie title"
            value={input}
            onChange={handleChange}
          />
          <button type="submit" className="searchButton">
            <div className='search-icon'><FaSearch /></div>
          </button>
        </div>
      </div>
      <>
        <SearchList filteredMovies={filteredMovies} />
      </>
    </main>

  )
}

export default Search
