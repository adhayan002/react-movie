import { Link } from "react-router-dom"
import CinemaNow from "../components/cinemanow.png"
import '../components/Header.css'
import { Input,Button } from '@chakra-ui/react'
import { ChakraProvider } from "@chakra-ui/react"

function Navbar() {
  return (
    <div className="header">
        <div className="headerLeft">
            <Link to='/'><img className="header_icon" src={CinemaNow} alt="logo"/></Link>
            <Link to='/movies/popular' style={{textDecoration:'none'}}><span>Popular</span></Link>
            <Link to='/movies/top_rated' style={{textDecoration:'none'}}><span>Top Rated</span></Link>
            <Link to='/movies/upcoming' style={{textDecoration:'none'}}><span>Upcoming</span></Link>
        </div>
        <div>
          <ChakraProvider>
          <Input placeholder='Enter a movie!' size='sm' style={{maxWidth:'10vw',marginRight:'10px'}}  />
          <Button colorScheme='black' size='sm'>Send</Button>
          </ChakraProvider>
        </div>

    </div>
  )
}

export default Navbar