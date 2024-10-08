import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const NavBar = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary d-flex flex-row align-items-center justify-content-between px-3"
    >
      <Navbar.Brand href="#">Navbar</Navbar.Brand>
      <Nav className="d-flex flex-row align-items-center justify-content-between">
        {/* conditional rendering with &&
            if left side of && exists
            then display element on right side of &&
        */}
        { user.name && <h6 className="mx-3">User: {user.name}</h6>}
        <Button variant="outline-success" onClick={() => navigate("login")}>Login</Button>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
