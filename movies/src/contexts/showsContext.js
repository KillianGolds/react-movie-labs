// Import React and its hooks, and create a new context for shows
import React, { useState, createContext } from "react";
export const ShowsContext = createContext(null);

// Define a context provider component for shows
const ShowsContextProvider = (props) => {
  // State for storing favorite shows
  const [favoritesShows, setFavoritesShows] = useState([]);

  // State for storing shows in the watchlist
  const [watchlist, setWatchlist] = useState([]);

  // Function to add a show to favorites, ensuring no duplicates
  const addToFavoritesShows = (show) => {
    if (!favoritesShows.includes(show.id)) {
      setFavoritesShows([...favoritesShows, show.id]);
    }
  };

  // Function to remove a show from favorites
  const removeFromFavoritesShows = (show) => {
    setFavoritesShows(favoritesShows.filter((mId) => mId !== show.id));
  };

  // Function to add a show to the watchlist, ensuring no duplicates
  const addToWatchlist = (show) => {
    if (!watchlist.includes(show.id)) {
      setWatchlist([...watchlist, show.id]);
    }
  };

  // Function to remove a show from the watchlist
  const removeFromWatchlist = (show) => {
    setWatchlist(watchlist.filter((sId) => sId !== show.id));
  };

  // Provides the shows context to child components
  return (
    <ShowsContext.Provider
      value={{
        favoritesShows,
        addToFavoritesShows,
        removeFromFavoritesShows,
        watchlist,
        addToWatchlist,
        removeFromWatchlist,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

// Export the context provider for use in other components
export default ShowsContextProvider;
