// Importing necessary React components and hooks
import React from "react";
import { useParams } from 'react-router-dom'; 
import MovieDetails from "../components/movieDetails/";
import CastList from "../components/castList/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieCast } from '../api/tmdb-api';
import { useQuery } from "react-query"; 
import Spinner from '../components/spinner'; 

// The main component for the movie page
const MoviePage = (props) => {
  // Getting the movie ID from the URL parameters
  const { id } = useParams(); 

  // Using React Query to fetch movie data. This manages the data fetching lifecycle: loading, error, and success states
  const { data: movie, error: movieError, isLoading: isMovieLoading, isError: isMovieError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  // Similarly, fetching the cast data for the movie
  const { data: cast, error: castError, isLoading: isCastLoading, isError: isCastError } = useQuery(
    ["cast", { id: id }], 
    getMovieCast
  );
  
  // If the movie or cast data is still loading, show the Spinner component
  if (isMovieLoading || isCastLoading) {
    return <Spinner />;
  }

  // If there's an error in fetching movie data, display the error message
  if (isMovieError) {
    return <h1>{movieError.message}</h1>;
  }

  // Similarly, if there's an error in fetching cast data, display this error message
  if (isCastError) {
    return <h1>{castError.message}</h1>;
  }

  // Rendering the movie page template with movie details and cast list, only if the movie data is available
  return (
    <>
      {movie && (
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
          <CastList cast={cast} />
        </PageTemplate>
      )}
    </>
  );
};

// Exporting the component for use in other parts of the app
export default MoviePage;
