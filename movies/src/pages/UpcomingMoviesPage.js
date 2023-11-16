import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage'

const UpcomingMoviesPage = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(movies => {
            setMovies(movies);
        });
    }, []);

    // Dummy action function
    const dummyAction = (movie) => {
        // dummyplaceholder
    };

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
            action={(movie) => dummyAction(movie)}
        />
    );
}

export default UpcomingMoviesPage;
