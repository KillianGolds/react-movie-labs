// Import necessary modules and components from React, react-query, and custom components.
import React, { useState } from "react";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';
import PageTemplate from '../components/templateMovieListPage';
import { getLatestMovies, getTrendingMovies, getTopRatedMovies, getMovies } from "../api/tmdb-api";

// Define the HomePage component.
const HomePage = () => {
  // State to track which tab is currently active. Defaults to 'discover'.
  const [activeTab, setActiveTab] = useState('discover');

  // Fetch movies data based on the active tab. The useQuery hook handles the data fetching and state management.
  const { data, error, isLoading, isError } = useQuery(['movies', activeTab], () => {
    // Switch statement to determine which API function to call based on the active tab.
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

  // Display a loading spinner while the data is being fetched.
  if (isLoading) {
    return <Spinner />;
  }

  // Show an error message if there's an error in data fetching.
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Assign the fetched movies data to a variable, handling the 'latest' tab differently.
  const movies = activeTab === 'latest' ? data : data?.results;

  // Debugging: Log the movies data to the console.
  console.log("Movies passed to template:", movies);
  
  // Render the main component with tab buttons and the PageTemplate component, passing movies data and a favorite icon.
  return (
    <>
      {/* Buttons for switching tabs */}
      <div className="tab-container">
        <button onClick={() => setActiveTab('discover')}>Discover</button>
        <button onClick={() => setActiveTab('top-rated')}>Top Rated</button>
        <button onClick={() => setActiveTab('trending')}>Trending</button>
        <button onClick={() => setActiveTab('latest')}>Latest</button>
      </div>

      {/* PageTemplate component displays movies based on the active tab and allows adding to favorites */}
      <PageTemplate
        title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Movies`}
        movies={movies}
        action={(movie) => <AddToFavoritesIcon movie={movie} />}
      />
    </>
  );
};

// Export the HomePage component for use in other parts of the app.
export default HomePage;
