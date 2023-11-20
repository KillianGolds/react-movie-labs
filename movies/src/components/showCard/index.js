// Importing necessary React and Material-UI components
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

// Defining the Show component to display TV show details
export default function Show({ show, action }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* Card Header with conditional avatar for shows in the watchlist */}
      <CardHeader
        avatar={
          show.inWatchlist ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              {/* Red avatar if the show is in the watchlist */}
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {show.name}{" "} {/* Show title */}
          </Typography>
        }
      />
      {/* Card Media for displaying the show's image */}
      <CardMedia
        sx={{ height: 500 }}
        image={
          show.poster_path
            ? `https://image.tmdb.org/t/p/w500/${show.poster_path}`
            : img // Default image if no poster is available
        }
      />
      {/* Card Content for additional show details */}
      <CardContent>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" component="p">
              {show.first_air_date} {/* Displaying the first air date */}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {/* Card Actions for user interaction */}
      <CardActions disableSpacing>
        {action && action(show)} {/* Executing the action if provided */}
        <Link to={`/shows/${show.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ... {/* Button to navigate to show's detailed page */}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
