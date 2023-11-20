// Import necessary React components, hooks, and utilities
import React from "react";
import MovieHeader from "../headerMovie"; 
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getShowImages } from "../../api/tmdb-api"; 
import { useQuery } from "react-query";
import Spinner from '../spinner'

// Define the TemplateShowPage component
const TemplateShowPage = ({ show, children }) => {
  // Fetch show images using react-query for better caching and state management
  const { data, error, isLoading, isError } = useQuery(
    ["images", { id: show.id }],
    getShowImages 
  );

  // Display a spinner while the data is loading
  if (isLoading) {
    return <Spinner />;
  }

  // Show an error message if the data fetching results in an error
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Extracting image data from the fetched data
  const images = data.posters; 

  // Render the UI for the show page
  return (
    <>
      <MovieHeader show={show} />
      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          {/* Image list to display show images */}
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList cols={1}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                        alt={image.name} 
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {/* Slot for rendering additional children components */}
          {children}
        </Grid>
      </Grid>
    </>
  );
};

// Export the component for use in other parts of the application
export default TemplateShowPage;
