import React from 'react';
import { useQuery } from 'react-query';
import { getUpcomingMovies } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

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

    // Dummy action function
    const dummyAction = (movie) => {
        // dummy placeholder
    };

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => {
                return <PlaylistAddIcon movie={movie} />
            }}
        />
    );
};

export default UpcomingMoviesPage;
