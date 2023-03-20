import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import axios from "axios";

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];
  const fetching = useCallback(async () => {
    setisLoading(true);
    seterror(null);
    try {
      const response = await axios.get(`${url}films/`);

      // .then(function (response) {
      // handle success
      console.log(response);
      setMovieList(
        response.data.results.map((mov) => {
          mov.openingText = mov.opening_crawl;
          mov.releaseDate = new Date(mov.release_date).toLocaleDateString();
          return mov;
        })
      );
      setisLoading(false);
    } catch (e) {
      console.log(`Error: ${e}`);
      setisLoading(false);
      seterror(e);
    }
  }, []);
  useEffect(() => {
    fetching();
  }, [fetching]);
  const url = "https://swapi.py4e.com/api/";
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [errors, seterror] = useState(null);

  const fetchHandler = () => {
    fetching();
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>

      <section>
        {isLoading && <p>loading....</p>}
        {!isLoading && movieList.length == 0 && !errors && <p>No Movies</p>}
        {!isLoading && <MoviesList movies={movieList} />}
        {!isLoading && errors && <p>Error:{String(errors)}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
