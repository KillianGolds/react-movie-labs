import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage'


function UpcomingMoviesPage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getUpcomingMovies().then(movies => {
            setMovies(movies);
        });
    }, []);

    return (
        <PageTemplate
            title="Upcoming Movies"
            movies={movies}
        />
    );
}

export default UpcomingMoviesPage;
