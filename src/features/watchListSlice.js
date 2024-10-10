import { createSlice } from "@reduxjs/toolkit";

// set up our initial state
// this is the global data that we'll be keeping track of throughout our application
const initialState = {
    watchList: [],
    totalSize: 0
}

// our slice allows us to define our reducer functions and then it will automatically setup our actions for us
// it also utilizes our initial state that we set up above
export const watchListSlice = createSlice({
    name: "watch list", // required
    initialState,
    /* Reducers - functions that modify our state
        reducers take in 2 (optional) parameters: state and action
        state - the current state
        action - the action that has been dispatched that will specify which reducer function to run (type) AND include any necessary data that we want to pass to our function (payload)
    */
    reducers: {
        addItem: (state, action) => {
            console.log("add item reducer")
            // we can access our data utilizing action.payload
            const movie = action.payload;
            console.log(movie)
            // adding our movie data to our current watchList state
            state.watchList.push(movie);
            state.totalSize = state.watchList.length
            console.log(state.totalSize);

        },
        deleteItem: (state, action) => {
            console.log("delete item reducer")
            const id = action.payload;
            //.filter()
            // if our singular move variable meets the following condition, add it to the result array newState ELSE get rid of it
            //here, we're saying if our movie.id DOESN'T equal our given id from action.payload, add it to the result array
            // the reason we use !== (not equal) is because id is the movie id we want to delete
            const newState = state.watchList.filter((movie) => movie.id !== id)

            //overwrite current watchList state with our new filtered watchList state
            state.watchList = newState;

            state.totalSize = state.watchList.length
        }
    }
})

// Actions that are generated by our createSlice that correspond with the reducer functions we set up
export const { addItem, deleteItem } = watchListSlice.actions;

export default watchListSlice.reducer;