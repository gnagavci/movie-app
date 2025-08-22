import React from "react";
import Search from "./components/Search";
import { useState, useEffect } from "react";

const API_BASE_URL = "https://api.themoviedb.org/3"; //define the base url

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; //import our API key from the .env file

const API_OPTIONS = {
  method: "GET", //define GET method
  headers: {
    accept: "application/json", //the API call will send back a JSON object
    Authorization: `Bearer ${API_KEY}`, //needed API authorization token
  },
};

///////// MAIN APP COMPONENT ///////////

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); //useState to manage the state of the search term in the Search bar
  const [errorMessage, setErrorMessage] = useState(""); //to manage the errorMessage

  const fetchMovies = async () => {
    try {
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies. Please try again later!");
    }
  };

  useEffect(() => {}, []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          {/* if there is an errorMessage, then display it in a paragraph */}
        </section>
      </div>
    </main>
  );
};

export default App;
