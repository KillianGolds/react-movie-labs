import React from "react";
import ShowCard from "../showCard";
import Grid from "@mui/material/Grid";

const ShowList = ( { shows, action }) => {
  // Check if the shows array is empty or undefined
  if (!shows || shows.length === 0) {
    return <p>No TV Shows available.</p>;
  }

  // Map over the shows array to render ShowCard components
  let showCards = shows.map((s) => (
    <Grid key={s.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <ShowCard show={s} action={action} />
    </Grid>
  ));

  // Log the shows data for debugging
  console.log("Shows in ShowList:", shows);

  // Return a Grid container wrapping the show cards
  return (
    <Grid container spacing={2}>
      {showCards}
    </Grid>
  );
};

export default ShowList;
