import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieCard from './components/MovieCard';

function App() {

  const API_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover"
      const {data: {results}} = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          query: searchKey
        }
      })

     setMovies(results)
  }

  useEffect( () => {
      fetchMovies()
  }, [])

  const renderMovies = () => (
      movies.map(movie => (
          <MovieCard data-testid='movie-card'
            key={movie.id}
            movie={movie}
          />
              
      ))
  )

  const searchMovies = (e) => {
      e.preventDefault()
      fetchMovies(searchKey)
  }

  return (
    <div className="App">
      <header className={'header'}>
        <div className={"header-content max-center"}>
          <h1>Movie Box App</h1>

        <form onSubmit={searchMovies}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)}/>
            <button type={"submit"}>Search</button>
        </form>
        </div>
          
      </header>
      <h1>Hello HNGx</h1>
      <div className='container max-center'>
            {renderMovies()}
      </div>
    </div>
  );
}

export default App;
