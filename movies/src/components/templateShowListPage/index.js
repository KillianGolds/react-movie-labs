// Importing React, custom components, and Material UI Grid
import React, { useState } from "react";
import Header from "../headerMovieList"; 
import FilterCard from "../filterMoviesCard"; 
import ShowList from "../showList"; 
import Grid from "@mui/material/Grid";

// Defining the component with props for the list of shows, page title, and an action callback
function ShowListPageTemplate({ shows, title, action }) {
  // State for filtering by name and genre
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const genreId = Number(genreFilter);

  // Filtering the shows based on name and genre
  let displayedShows = Array.isArray(shows) ? shows
    .filter((s) => s.name && s.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1)
    .filter((s) => genreId > 0 ? s.genre_ids && s.genre_ids.includes(genreId) : true)
    : [];

  // Handler for changing filter inputs
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  // Rendering the component using Material UI Grid layout
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
        <ShowList action={action} shows={displayedShows}></ShowList>
      </Grid>
    </Grid>
  );
}

// Exporting the component for use in other parts of the application
export default ShowListPageTemplate;
