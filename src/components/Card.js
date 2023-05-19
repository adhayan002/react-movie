import { useState,useEffect } from "react"
import Skeleton,{SkeletonTheme} from "react-loading-skeleton"
import "./Card.css"
import { Link } from "react-router-dom"
import { ChakraProvider,Text,Heading } from "@chakra-ui/react"

function Card({movie}) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

  return (
    <>
        {
            isLoading?
            <div className="cards">
                <SkeletonTheme color="#202020" highlightColor="#444">
                    <Skeleton height={300} duration={2}/>
                </SkeletonTheme>
            </div>:
            <ChakraProvider>
                <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                <div className="cards">
                    <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt={`${movie.original_title}`}/>
                    <div className="cards__overlay">
                        <Heading colorScheme="whiteAlpha" size="md" className="cards__title">{movie?movie.original_title:''}</Heading>
                        <div className="card_runtime">
                            {movie?movie.release_date:''}
                            <Text className="card__rating">{movie?movie.vote_average:''}<i className="fas fa-star"/></Text>
                        </div>
                        <div className="card__description">{movie?movie.overview.slice(0,118)+"...":""}</div>
                    </div>
                </div>
                </Link> 
            </ChakraProvider>
        }
    </>
  )
}

export default Card