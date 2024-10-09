import React from "react";
import { useMovieData } from "../hooks/useMovieData";
import { Container, Card, Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../features/watchListSlice";

const MovieData = () => {
  // use our custom hook to access our data
  const { movieData } = useMovieData();
  //setting up our dispatch
  // this function sends a call to our redux store that consists of an action
  // that action determines which reducer function to run
  const dispatch = useDispatch();

  const handleAddWatchList = (movieData) => {
    const modifiedMovieData = {
      id: movieData.id,
      original_title: movieData.original_title,
      poster_path: `https://image.tmdb.org/t/p/w185/${movieData.poster_path}`,
      overview: movieData.overview,
      release_date: movieData.release_date,
      popularity: Math.round(movieData.popularity),
    };
    // calling our dispatch with the action we want to run
    // as well as the payload we want to send with that action
    dispatch(addItem(modifiedMovieData))
  };

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://image.tmdb.org/t/p/w185/${movieData.poster_path}`}
        />
        <Card.Body>
          <Card.Title>{movieData.original_title}</Card.Title>
          <Card.Text>{movieData.overview}</Card.Text>

          <ListGroup variant="flush">
            <ListGroup.Item>Runtime: {movieData.runtime}</ListGroup.Item>
            <ListGroup.Item>
              Release Date: {movieData.release_date}
            </ListGroup.Item>
            <ListGroup.Item>Popularity: {movieData.popularity}</ListGroup.Item>
          </ListGroup>

          <Button
            variant="primary"
            onClick={() => handleAddWatchList(movieData)}
          >
            Add to WatchList
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieData;
