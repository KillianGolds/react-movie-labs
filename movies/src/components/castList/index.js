// Importing React and the component's CSS
import React from "react";
import './CastList.css';

// CastList component to display a list of cast members
const CastList = ({ cast }) => {
  // Checking if the 'cast' prop is an array; if not, display a fallback message
  if (!Array.isArray(cast)) {
    return <div>No cast information available.</div>;
  }

  // Rendering the cast list
  return (
    <div className="cast-container">
      {/* Title for the cast list */}
      <h2>Cast</h2>
      <div className="cast-cards">
        {/* Mapping over each cast member to create individual cards */}
        {cast.map((member) => (
          <div key={member.cast_id} className="cast-card">
            {/* Displaying the cast member's image */}
            <img
              src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
              alt={member.name}
              className="cast-image"
            />
            <div className="cast-details">
              {/* Displaying the cast member's name */}
              <h3 className="cast-name">{member.name}</h3>
              {/* Displaying the character name that the cast member plays */}
              <p className="cast-character">as {member.character}</p>
              {/* Displaying the popularity score of the cast member */}
              <p className="cast-popularity">Popularity: {member.popularity}</p>
              {/* Link to the cast member's profile on TMDB */}
              <a
                href={`https://www.themoviedb.org/person/${member.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cast-tmdb-link"
              >
                View on TMDB
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting CastList for use in other parts of the app
export default CastList;
