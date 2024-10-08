import React, { useContext } from 'react'
import UserContext from '../context/UserContext';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';

const Home = () => {

    // to access our Context from any of our components, we utilize the useContext() hook and specify which context we are trying to access.  then we can pick which state we want access to.
    // for here, we specify that we are using the UserContext and we want access to our user object state
    const { user } = useContext(UserContext);

  return (
    <Container>
        <NavBar />
        <h1>Welcome {user.name}</h1>
        {/* Ternary operator  ? : */}
        <p>You are {user.isLoggedIn ? "logged in" : "logged out"}</p> 
    </Container>
  )
}

export default Home