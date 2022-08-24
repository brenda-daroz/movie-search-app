import axios from "axios"

const API_KEY = '439baa475bab7ee26968174cbfe4007a'

function requestMovies() {
 console.log(axios.get(`https://api.themoviedb.org/3/movie?api_key=${API_KEY}&query=movie`)) 
}    


export default requestMovies