import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import Filter from "./Filter";
import { motion } from "framer-motion";
const Movies = () => {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=943b84fa01c9c91d04062da79a7e9234&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div Layout className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
    </>
  );
};

export default Movies;
