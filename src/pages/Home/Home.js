import { useEffect, useState } from "react"
import "./Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList";
function Home() {

    const [popularMovies,setPopularMovies]=useState([])

    useEffect(()=>{
        fetch('http://api.themoviedb.org/3/movie/popular?api_key=b66e6fd89ccfd1d6a73935aba37f7cfc&language=en-US')
        .then(res=>res.json())
        .then(data=>setPopularMovies(data.results))
    },[])
  return (
    <>
        <div className="poster">
            <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
            {
                popularMovies.map(movie=>(
                    <>
                        <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                        <div className="posterImage">
                        <div className="overlay"></div>
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt={`${movie.orignal_title}`} />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie?movie.original_title:""}</div>
                            <div className="posterImage__runtime">
                                {movie?movie.release_date:""}
                                <span className="posterImage__rating">
                                    {movie?movie.vote_average:""}
                                    <i className="fas fa-star"/>{" "}
                                </span>
                            </div>
                            <div className="posterImage__description">{movie?movie.overview:""}</div>
                        </div>
                        </Link>
                    </>
                    
                ))
            }
            </Carousel>
            <MovieList/>

        </div>
    </>
  )
}

export default Home
