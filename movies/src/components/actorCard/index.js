// Importing necessary React libraries and hooks
import React from 'react';
import { useQuery } from 'react-query';
// Importing a function to fetch actor details from our API
import { getActorDetails } from '../../api/tmdb-api';
// Importing styling for the actor card
import './actorCard.css';

// Mapping numeric gender codes to strings
const genderMap = {
  1: 'Female',
  2: 'Male',
  3: 'Non-binary',
  0: 'Not specified',
};

// Component to display an actor's card
const ActorCard = ({ actor }) => {
  // Using the useQuery hook to fetch actor details
  // The query is identified by ['actorDetails', actor.id]
  // and fetches data using getActorDetails
  const {
    data: actorDetails,
    isLoading,
    isError,
    error,
  } = useQuery(['actorDetails', actor.id], () => getActorDetails(actor.id), {
    staleTime: 1000 * 60 * 60 * 24, // Cache the data for 24 hours
  });

  // Display a loading message while the data is being fetched
  if (isLoading) return <div>Loading...</div>;
  // Display an error message if there's an error in fetching data
  if (isError) return <div>Error: {error.message}</div>;

  // Rendering the actor's card
  return (
    <div className="actor-card">
      {/* Actor's image */}
      <img
        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
        alt={actor.name}
        className="actor-image"
      />
      <div className="actor-details">
        {/* Actor's name */}
        <h3 className="actor-name">{actor.name}</h3>
        {/* Actor's gender, mapped from a number to text */}
        <p className="actor-gender">Gender: {genderMap[actor.gender]}</p>
        {/* Actor's aliases, if any */}
        {actorDetails.also_known_as && (
          <p className="actor-also-known-as">Also known as: {actorDetails.also_known_as.join(', ')}</p>
        )}
        {/* Actor's birthday */}
        <p className="actor-birthday">Birthday: {actorDetails.birthday}</p>
        {/* Actor's deathday, if applicable */}
        {actorDetails.deathday && <p className="actor-deathday">Deathday: {actorDetails.deathday}</p>}
        {/* Link to the actor's profile on TMDB */}
        <a
          href={`https://www.themoviedb.org/person/${actor.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="actor-tmdb-link"
        >
          TMDB Profile
        </a>
      </div>
    </div>
  );
};

// Exporting the ActorCard component for use in other parts of the app
export default ActorCard;
