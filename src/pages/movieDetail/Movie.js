import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
        window.scrollTo(0,0)
    }, [id])


    return (
        <ChakraProvider>
        <div className="movie">
            <div className="movie__intro">
                <div className="overlay"></div>
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} alt='movie background'/>
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" alt="movie poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.vote_average: ""} <i class="fas fa-star" />
                            <Text className="movie__voteCount">{currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}</Text>
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <div style={{display:"inline-block"}}><Text fontSize='15px' className="movie__genre" id={genre.id}>{genre.name}</Text></div>

                                )) 
                                : 
                                ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <Heading className="synopsisText" fontSize='30px'>Synopsis</Heading>
                        <Text>{currentMovieDetail ? currentMovieDetail.overview : ""}</Text>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currentMovieDetail && currentMovieDetail.homepage && <Link href={currentMovieDetail.homepage} target="_blank" style={{textDecoration: "none"}} rel="noreferrer"><p><Button className="movie__homeButton movie__Button" colorScheme="red">Homepage <i className="newTab fas fa-external-link-alt"></i></Button></p></Link>
                }
                {
                    currentMovieDetail && currentMovieDetail.imdb_id && <Link href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id} target="_blank" style={{textDecoration: "none"}} rel="noreferrer"><p><Button className="movie__imdbButton movie__Button" colorScheme="yellow">IMDb<i className="newTab fas fa-external-link-alt"></i></Button></p></Link>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currentMovieDetail && currentMovieDetail.production_companies && currentMovieDetail.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <Text className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} alt="company logo" />
                                    <span>{company.name}</span>
                                </Text>
                            }
                        </>
                    ))
                }
            </div>
        </div>
        </ChakraProvider>
    )
}

export default Movie