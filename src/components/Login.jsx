import React, { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Login = () => {
  const [username, setUsername] = useState("");
  //grabbing our setUser function from context to modify our user data
  const { setUser } = useContext(UserContext);
  //react router dom function used to change page
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    //stops refresh
    event.preventDefault();

    const newUser = { name: username, isLoggedIn: true }

    // .setItem - stores our data in web storage
    // need to save items as key value pairs where the keys are unique
    // values need to be stored as strings. so if you are working with object types, make sure you use JSON.stringify
    // for this example, we are storing our user data in sessionStorage with the unique key "user".
    // in order to access or overwrite this data, we will need to use that "user" key again
    // because this is sessionStorage, this data will only exist until we close the page
    sessionStorage.setItem("user", JSON.stringify(newUser))

    // modify our user state inside context
    setUser(newUser);


    //navigate to our home page
    navigate("/");
  };

  return (
    <Container>
      <NavBar />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formLogin">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter login info"
            autoComplete="off"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
