import React, { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

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
            action={(movie) => {
                return <PlaylistAddIcon movie={movie} />
                
            }}
        />
    );
}
export default UpcomingMoviesPage;
