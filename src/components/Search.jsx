import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Form, Container, Button, Spinner } from "react-bootstrap";
import MovieData from "./MovieData";

const Search = () => {
  // our state to keep track of our search term
  const [searchQuery, setSearchQuery] = useState("");

  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDA3M2Y5ZTMwNDFhOWZkYzlkYmYyN2RkYzhkYjVhYyIsIm5iZiI6MTcyODQyOTU4My4xNTQ4NzksInN1YiI6IjY2NzljNDQwNjdlMmU3MzVlNjRlMTk4OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OpdDqsqy3gJQMsLhmiGv7R0FeBvey1CfbAOzJtabtO0";
  //https://api.themoviedb.org/3/search/movie?query={searchQuery}&include_adult=false&language=en-US&page=1'
  const fetchSearch = async () => {
    const responseSearch = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log(responseSearch.data.results[0])
    return responseSearch.data.results[0];
  };

  const {
    data: searchedMovie,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["movies"], // labels our query so react query can tell if we made the api call/have the data or not
    queryFn: fetchSearch, //function that makes API call
    enabled: false, // true = run query automatically (default), false do NOT run automatically
  });

  // Showcasing that our onChange runs whenever we press any single key inside our form input
//   useEffect(() => {
//     console.log("Query: " + searchQuery)
//   },[searchQuery])

  const handleSubmit = (event) => {
    event.preventDefault()
    refetch()
  };

  if(isLoading) {
    return <Spinner />
  }

  if(isError) {
    console.log(error)
    return <h3>{error.message}</h3>
  }

  return (
    <Container className="m-3">
      <Form onSubmit={handleSubmit} className="m-3">
        <Form.Group className="mb-3" controlId="formSearch">
          <Form.Label>Search</Form.Label>
          <Form.Control 
            autoComplete="off"
            type="text"
            placeholder="Enter Movie Title"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

    {/* if we have fetched our searched Movie Data, then displayed the MovieData component */}
      {searchedMovie && <MovieData />}
    </Container>
  );
};

export default Search;
