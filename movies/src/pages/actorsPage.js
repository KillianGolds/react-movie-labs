// Importing necessary React and other library components.
import React from 'react';
import { useQuery } from 'react-query'; // useQuery is for fetching data.
import { getPopularActors } from '../api/tmdb-api'; // Function to get popular actors from the API.
import ActorCard from '../components/actorCard'; // Custom component to display each actor.
import Spinner from '../components/spinner'; // A spinner component for loading state.
import './actorsPage.css'; // Importing CSS styles for this page.

// Component definition for ActorsPage.
const ActorsPage = () => {
  // Using useQuery to fetch popular actors. It handles loading, errors, and data fetching.
  const { data: actors, isLoading, isError, error } = useQuery('popular-actors', getPopularActors);

  // If data is loading, show the spinner.
  if (isLoading) {
    return <Spinner />;
  }

  // If there's an error in fetching data, display the error message.
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // The main return block that renders when data is successfully fetched.
  return (
    <div className="actors-page">
      <h2>Popular Actors</h2> {/* Title for the page */}
      <div className="actors-grid">
        {/* Mapping over each actor to create a list of ActorCard components */}
        {actors.map((actor) => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  );
};

// Exporting the ActorsPage component so it can be used in other parts of the app.
export default ActorsPage;
