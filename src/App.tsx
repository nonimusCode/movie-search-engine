import React, { useState, useRef} from 'react'
import {Movies} from './components/movies/movies'
import {Search} from './components/searched/search'
import {MapingMovies} from './hooks/mapingMovies'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { movies } = MapingMovies()


  return (
    <div className="App">
      <div>
      <Search/>
      
        <main >
          <Movies movies={movies}/>
        </main>
        </div>
    </div>
  )
}

export default App
