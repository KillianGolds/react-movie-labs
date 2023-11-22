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

export const getPopularActors = () => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error fetching popular actors');
    }
    return response.json();
  })
  .then((data) => {
    return data.results.slice(0, 50);
  })
  .catch((error) => {
    throw error;
  });
};

export const getActorDetails = (actorId) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
};


export const getMovieCast = ({ queryKey }) => {
  const [_, { id }] = queryKey;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error fetching movie cast');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Cast data:', data); // Log the data to check its structure
    return data.cast; // The API response must have a 'cast' key with an array value
  })
  .catch((error) => {
    throw error;
  });
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

