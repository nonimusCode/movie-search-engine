import '../../syles/movies.css'

export function ListOfMovies ({movies} : {movies : any}) {
  return(
         <ul className="listMovies">
              {movies.map((movie : any) =>{
                return(
                <li key={movie.id}>
                  <h3>{movie.tittle}</h3>
                  <p>{movie.year}</p>
                  <img src={movie.img} alt={movie.Title} />
                </li>
                )
              })}
          </ul>  
)
}

export function NotFoundMovies () {
    return (
        <div>
            <h1>not found movies </h1>
        </div>
    )
}

export function Movies ( {movies}:{movies : any} ) {
  const hasMovies = movies?.length > 0 
 return(
    <div className='list'>
    {
        hasMovies 
        ?
        <ListOfMovies movies={movies}/>
        : 
        <NotFoundMovies />
    }
    </div>
 )
}