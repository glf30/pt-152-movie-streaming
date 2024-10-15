import { useState } from "react";
import UserContext from "./context/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { store } from "./store";
import WatchList from "./components/WatchList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  // const [user, setUser] = useState({ name: "", isLoggedIn: false });
  const [user, setUser] = useState(() => {
    // .getItem() - retrieves our data from sessionStorage if that data exists
    // we pass our key as a parameter to getItem() and it will check to see if there is any data associated with that key
    // if getItem cannot find the data associated with that key, return null
    const loggedInUser = sessionStorage.getItem("user");
    
    return loggedInUser !== null 
    // return the storage data   - not null, we must've gotten our data back
    ? JSON.parse(loggedInUser)
    // return the default data - null, we didn't get any data, so set up the default data
    : { name: "", isLoggedIn: false }

    // if(loggedInUser !== null){
    //   return JSON.parse(loggedInUser)
    // } else {
    //   return { name: "", isLoggedIn: false };
    // }

    // easier to read version
    // return loggedInUser !== null ? JSON.parse(loggedInUser) : { name: "", isLoggedIn: false }
  });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* Our Context.Provider is going to take in a set of values and then
      provide them to all of the components inside the Context.Provider tag
      UserContext.Provider takes in the user state that we set up above as a
      value */}
        <UserContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/watch-list" element={<WatchList />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
