  export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
    });
  };
  
  export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getTVShow = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        return response.json().then(json => {
          throw new Error(json.message);
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };
  
  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getShowImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(response => response.json())
    .then(data => {
      if (!data || data.errors) {
        throw new Error('Error fetching show images');
      }
      return data;
    })
    .catch((error) => {
      throw error;
    });
};


  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
    .then(res => res.json())
    .then(json => json.results);
  };


  // Get trending movies endpoint
  export const getTrendingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching trending movies');
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };

  // Get top rated movies endpoint
  export const getTopRatedMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching top rated movies');
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
  };

  // Get popular tv shows endpoint
  export const getPopularTVShows = () => {
    return fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching popular TV shows');
      }
      return response.json();
    })
    .then((data) => {
      console.log("Popular TV shows data:", data);
      return data.results;
    })
    .catch((error) => {
      throw error;
    });
  };

  // Get the latest movies via paramaterised endpoint
  export const getLatestMovies = () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Format as YYYY-MM-DD
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=release_date.desc&include_adult=false&include_video=false&page=1&release_date.lte=${currentDate}`
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Error fetching the latest movies');
      }
      return response.json();
    })
    .then((data) => {
      console.log("Latest movies data:", data);
      return data.results;
    })
    .catch((error) => {
      throw error;
    });
  };

