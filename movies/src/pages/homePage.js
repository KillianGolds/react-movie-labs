// Import necessary modules and components from React and other files.
import React, { useState } from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import PageTemplate from '../components/templateMovieListPage';
import { getLatestMovies, getTrendingMovies, getTopRatedMovies, getMovies } from "../api/tmdb-api";

// Define the HomePage component.
const HomePage = () => {
  // Set up a state variable for the active tab with 'discover' as the default value.
  const [activeTab, setActiveTab] = useState('discover');

  // Use the useQuery hook to fetch data depending on the active tab. The hook manages the data fetching state.
  const { data, error, isLoading, isError } = useQuery(['movies', activeTab], () => {
    // Choose which function to call based on the current active tab.
    switch (activeTab) {
      case 'latest':
        return getLatestMovies();
      case 'trending':
        return getTrendingMovies();
      case 'top-rated':
        return getTopRatedMovies();
      default:
        return getMovies();
    }
  });

  // Show a loading spinner while the data is being fetched.
  if (isLoading) {
    return <Spinner />;
  }

  // Display an error message if there was an error fetching the data.
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Set the movies variable to the appropriate data based on the active tab.
  // If the active tab is 'latest', use the direct data; otherwise, use the results property from the data.
  const movies = activeTab === 'latest' ? data : data?.results;

  // Output the movies data to the browser console for debugging.
  console.log("Movies passed to template:", movies);
  
  // Stub function to handle adding a movie to favorites (to be implemented).
  const addToFavorites = (movieId) => true;

  // Render the page, including buttons to switch tabs and the PageTemplate component with the movies data.
  return (
    <>
      <div className="tab-container">
        <button onClick={() => setActiveTab('discover')}>Discover</button>
        <button onClick={() => setActiveTab('latest')}>Latest</button>
        <button onClick={() => setActiveTab('trending')}>Trending</button>
        <button onClick={() => setActiveTab('top-rated')}>Top Rated</button>
      </div>
      <PageTemplate
        title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Movies`}
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
    </>
  );
};

export default HomePage;
