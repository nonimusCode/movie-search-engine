import whitResponse from '../mocks/whit-results.json'
import noReponse from '../mocks/no-response.json'

export function MapingMovies() {
    const movies = whitResponse.Search

    const mapingMovies = movies.map(movie => ({

        id: movie.imdbID,
        tittle: movie.Title,
        img: movie.Poster,
        year: movie.Year
    }))

    return { movies: mapingMovies }

}