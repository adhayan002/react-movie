import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import MovieList from './components/movieList';
import Movie from './pages/movieDetail/Movie';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="/movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
          <Route path="*" element={<h1>Not found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
