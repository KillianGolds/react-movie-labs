import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  // Initializing state for name and genre filters
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  // Filtering logic for movies based on name and genre filters
  let displayedMovies = Array.isArray(movies) ? movies
    .filter((m) => {
      // First filter: Selects movies that contain the search term in their title
      return m.title && m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      // Second filter: Selects movies of a specific genre, if a genre is chosen
      return genreId > 0 ? m.genre_ids && m.genre_ids.includes(genreId) : true;
    })
    : []; // If the movies array is undefined, use an empty array

  // Function to handle changes in name or genre filters
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  // Rendering the page layout using Material-UI Grid
  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies}></MovieList>
      </Grid>
    </Grid>
  );
}

export default MovieListPageTemplate;
