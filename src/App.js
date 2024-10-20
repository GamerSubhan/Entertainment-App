import './App.css';
import React, {useEffect, useState, createRef} from 'react';
import { HashRouter as Router, Route, Switch, Routes, Link } from "react-router-dom";
import Home from './Components/Home';
import data from './data.json';
import logo from './assets/logo.svg';
import Filter from './Components/Filter';
import Movies from './Components/Movies';
import TvSeries from './Components/TvSeries';
import Bookmarked from './Components/Bookmarked';
import Login from './Components/Login';
import Avatar from './assets/image-avatar.png';

function App() {
  const [movies, setMovies] = useState([]);
  const trendRef = createRef();
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    if(Array.isArray(data)) {
      setMovies(data);
    }
    else
    {
      console.error("Throw an error: ", data);
    }
  }, [])

  const [activeIndex, setActiveIndex] = useState(null);

  const searchList = document.getElementById('searchList');
  const result = document.getElementById('resultTit');

  // Function to handle button activation
  const activate = (index) => {
    setActiveIndex(index); // Set the clicked button as active
    searchList.style.display = 'none';
    result.innerHTML = '';
  };

  const addMovie = (movie) => {
    setSavedMovies(prevMovies => [...prevMovies, movie]);
    console.log('Saved Movies:', [...savedMovies, movie]); // Log the updated array
};

  return (
    <Router>
      <div id='pageHeader'>
        <div className='navMenu'>
          <img style={{marginTop: '5vh', position: 'relative'}} width={40} height={32.7} src={logo} />
          <ul className='navList'>
            <li><Link to="/home"><svg onClick={() => activate(0)} width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" fill={activeIndex === 0 ? 'white' : 'gray'}/></svg></Link></li>
            <li><Link to="/movies"><svg onClick={() => activate(1)} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill={activeIndex === 1 ? 'white' : 'gray'}/></svg></Link></li>
            <li><Link to="/series"><svg onClick={() => activate(2)} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill={activeIndex === 2 ? 'white' : 'gray'}/></svg></Link></li>
            <li><Link to="/bookmarked"><svg onClick={() => activate(3)} width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" fill={activeIndex === 3 ? 'white' : 'gray'}/></svg></Link></li>
          </ul>
          <img style={{marginTop: '30vh', border: '1px solid white', borderRadius: '360px'}} width={40} src={Avatar} />
        </div>
        <ul id='searchList'>
          {movies.map((movie) => (
              <li id={movie.title} className='trendLi movie'>
                <Home props={movie}/>
                <img width={250} src={require(`${movie.thumbnail.regular.small}`)}/>
              </li>
          ))}
        </ul>
        <Filter />
      </div>
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/home' element={
          <div className="App">
          <h1 id='trendTitle'>Trending</h1>
          <ul id='trendList' className='list'>
            {movies.map((movie) => (
              movie.isTrending ? (
                <li id={movie.title} className='searchLi'>
                  <Home props={movie}/>
                  <img width={400} src={require(`${movie.thumbnail.trending.small}`)}/>
                </li>
              ) : null
            ))}
          </ul>
          <ul id='recommendList' className='list'>
          {movies.map((movie) => (
              !movie.isTrending ? (
                <li id={movie.title} className='recommendLi' ref={trendRef}>
                  <Home props={movie} />
                  <img style={{borderRadius: '8px'}} width={250} src={require(`${movie.thumbnail.regular.small}`)} />
                </li>
              ) : null
            ))}
          </ul>
          <h1 id='recommendTitle'>Recommended for you</h1>
        </div>
    }></Route>
      <Route path='/movies' element={
        <>
          <h1 id="moviesTitle">Movies</h1>
          <ul id='movieList' className='list'>
            {movies.map((movie) => (
              movie.category === "Movie" ? (
              <li className='movieLi'>
                <Movies props={movie} addMovie={addMovie} />
                <img width={250} src={require(`${movie.thumbnail.regular.small}`)} />
              </li>
              ) : null
            ))}
          </ul>
        </>
      } />
      <Route path='/series' element={
        <>
          <h1 id="moviesTitle">Tv Series</h1>
          <ul id='movieList' className='list'>
            {movies.map((movie) => (
              movie.category === "TV Series" ? (
              <li className='movieLi'>
                <TvSeries props={movie} />
                <img width={250} src={require(`${movie.thumbnail.regular.small}`)} />
              </li>
              ) : null
            ))}
          </ul>
        </>
      } />
      <Route path='/bookmarked' element={
        <>
          <h1 id='moviesTitle'>Bookmarked Movies</h1>
          <ul id='movieList' className='list'>
            {movies.map((movie) => (
              movie.category === "Movie" && movie.isBookmarked ? (
              <li className='movieLi'>
                <Bookmarked props={movie} />
                <img width={250} src={require(`${movie.thumbnail.regular.small}`)} />
              </li>
              ) : null
            ))}
          </ul>
          <h1 id='bookmarkSeries'>Bookmarked TV Series</h1>
          <ul id='movieList' className='list'>
            {movies.map((movie) => (
              movie.category === "TV Series" && movie.isBookmarked ? (
              <li className='movieLi'>
                <Bookmarked props={movie} />
                <img width={250} src={require(`${movie.thumbnail.regular.small}`)} />
              </li>
              ) : null
            ))}
          </ul>
        </>
      } />
    </Routes>
    </Router>
  );
}

export default App;
