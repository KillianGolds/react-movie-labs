import React from 'react';
import { useQuery } from 'react-query';
import { getUpcomingMovies } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage';
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'; // Import the new component

const UpcomingMoviesPage = (props) => {
    // Use useQuery to fetch and cache upcoming movies
    const { data: movies, error, isLoading, isError } = useQuery('upcomingMovies', getUpcomingMovies);

    // Handle loading state
    if (isLoading) {
        return <p>Loading...</p>; // Display loading message
    }

    // Handle error state
    if (isError) {
        return <p>Error: {error.message}</p>; // Display error message
    }

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <AddToMustWatchIcon movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;
