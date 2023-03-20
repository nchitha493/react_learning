import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";
import axios from "axios";
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      let response = await  axios.get("https://react-http-c4b3a-default-rtdb.firebaseio.com/movies.json");
      response= response.data
     console.log(response)
     const transformedMovies= []
     let i = 0
     for (let key in response) {
      if (response.hasOwnProperty(key)) {
        console.log('########',key)
          console.log(`keeeeee####################WW ${key} : ${response[key].movie}`);
          let res = response[key].movie
          transformedMovies.push({})
          transformedMovies[i].id=  key
          transformedMovies[i].title=  res['title']
          transformedMovies[i].openingText=  res['openingText']
          transformedMovies[i].releaseDate=  res['releaseDate']
          i++
      }
  }
      // const transformedMovies = response.data.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.openingText,
      //     releaseDate: movieData.releaseDate,
      //   };
      // });
      console.log(transformedMovies)
      setMovies(transformedMovies);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
    axios
      .post("https://react-http-c4b3a-default-rtdb.firebaseio.com/movies.json", {
        movie
      })
      .then(function (response) {
        console.log(response);
        fetchMoviesHandler();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
