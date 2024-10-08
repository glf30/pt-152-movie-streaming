import { useState } from 'react'
import UserContext from './context/UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState({ name: '', isLoggedIn: false }); 

  return (
    //Our Context.Provider is going to take in a set of values and then provide them to all of the components inside the Context.Provider tag
    //UserContext.Provider takes in the user state that we set up above as a value
    <UserContext.Provider value={{user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
