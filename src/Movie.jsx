/* eslint-disable react/prop-types */
const Movie = ({movie}) => {
    const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w500";
    return (
        <div>
            <h4>{movie.title}</h4>
            <img src={`${POSTER_BASE_URL}${movie.poster_path}`} alt={movie.path} style={{ width: 250, height: 370 }} />
            <p>{movie.release_date}</p>
        </div>
    )
}
export default Movie;