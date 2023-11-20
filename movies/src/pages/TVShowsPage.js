// Import necessary modules and components from React and other files.
import React from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import ShowListPageTemplate from '../components/templateShowListPage'; 
import { getPopularTVShows } from "../api/tmdb-api";

// Define the TVShowsPage component.
const TVShowsPage = () => {
  // Use the useQuery hook to fetch popular TV shows. The hook manages the data fetching state.
  const { data: queryData, error, isLoading, isError } = useQuery('tvShows', getPopularTVShows);

  // Show a loading spinner while the data is being fetched.
  if (isLoading) {
    return <Spinner />;
  }

  // Display an error message if there was an error fetching the data.
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // The showsData variable is set to the results property from the data.
  // Changed the variable name from 'shows' to 'showsData' to avoid errors.
  const showsData = queryData?.results;

  // Output the shows data to the browser console for debugging.
  console.log("Shows data in TVShowsPage:", showsData);

  // Render the page, including the ShowListPageTemplate component with the TV shows data.
  return (
    <ShowListPageTemplate
      title="Popular TV Shows"
      shows={showsData} // Changed the prop name to match the updated variable
      action={(show) => <AddToFavoritesIcon show={show} />}
    />
  );
};

export default TVShowsPage;
