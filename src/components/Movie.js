import React from "react";
import { motion } from "framer-motion";
const Movie = ({ movie }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      Layout
    >
      <h2> {movie.title} </h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt="images"
      />
    </motion.div>
  );
};

export default Movie;
