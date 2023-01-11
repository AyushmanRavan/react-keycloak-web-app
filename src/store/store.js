import { configureStore } from '@reduxjs/toolkit';
// import usersReducer from './rootReducer';
import usersReducer from '../redux/user/user.slice';
import mainReducer from './mainReducer';

// const middleware = [] // createStore(rootReducer, applyMiddleware(...middleware))
// export default configureStore({
// export const store = configureStore({
 const store = configureStore({                       
  reducer:{        //add reducers here
    users: usersReducer,
  },                                        
  devTools: process.env.NODE_ENV !== 'production',
});

export default store


// The configureStore function takes one object parameter with the following options:
// reducer :— A single reducer or object of slice reducers.
// middleware (optional) :— An array of Redux middleware. Redux Thunk is included by default.
// devTools (optional) :— A boolean to determine whether to enable Redux DevTools. Defaults to true.
// preloadedState (optional) :— The initial state.
// enhancers (optional) :— The store enhancers to apply.

 










// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import logger from 'redux-logger'

// import usersReducer from "./slices/userSlice";
// import postsReducer from "./slices/postSlice";

// const rootReducer = combineReducers({
//   users: usersReducer,
//   posts: postsReducer
// });

// const preloadedState = {
//   postsData: [
//     {
//       text: 'JavaScript Centric',
//       completed: true,
//     },
//     {
//       text: 'Lucky Gamer',
//       completed: false,
//     },
//   ]
// }

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   devTools: process.env.NODE_ENV !== "production",
//   preloadedState,
//   enhancers: [reduxBatch],
// });

// export default store;











// store/configureStore.js

// import {createStore, applyMiddleware, compose} from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers/rootReducer";

// export default function configureStore(preloadedState) {
//     const middlewares = [thunk];
//     const middlewareEnhancer = applyMiddleware(...middlewares);
//     const storeEnhancers = [middlewareEnhancer];
//     const composedEnhancer = compose(...storeEnhancers);
//     const store = createStore(
//         rootReducer,
//         preloadedState,
//         composedEnhancer
//     );
//     return store;
// }
















// Here's a typical skeleton of an asynchronous action creator with redux-thunk:
// function getUsers() {
//     return function(dispatch) {
//       // notify about fetch start
//       dispatch({ type: "FETCH_USERS_REQUEST" });
  
//       return fetch("/api/users/")
//         .then(response => {
//           if (!response.ok) throw Error(response.statusText);
//           return response.json();
//         })
//         .then(json =>
//           /* notify about success*/
//           dispatch({
//             type: "FETCH_USERS_SUCCESS",
//             payload: json
//           })
//         )
//         .catch(error =>
//           /* notify about failure*/
//           dispatch({
//             type: "FETCH_USERS_FAILURE",
//             payload: error.message
//           })
//         );
//     };
//   }

// three different actions in Redux:
// =======================================
// FETCH_ENTITY_REQUEST
// FETCH_ENTITY_FAILURE
// FETCH_ENTITY_SUCCESS


// createAsyncThunk(typePrefix: string, payloadCreator: AsyncThunkPayloadCreator, options?: AsyncThunkOptions): AsyncThunk
// If you need to access thunk's parameters to use dispatch or getState, pass the thunkAPI parameter to the 
// callback function (or destructure what you need):

// Redux Toolkit includes redux-thunk out of the box.
//   const getUsers = createAsyncThunk("users/getUsers", () => {
//     return fetch("/api/users/")
//       .then(response => {
//         if (!response.ok) throw Error(response.statusText);
//         return response.json();
//       })
//       .then(json => json);
//   });

// automatically create an action creator for each Promise state. For example if we name our async thunk "users/getUsers", it generates:
// ===============================================
// pending: "users/getUsers/pending"
// rejected: "users/getUsers/rejected"
// fulfilled: "users/getUsers/fulfilled"

//  export const addBook = createAsyncThunk(
//    "book/add",                                       //// type
//    async (book, thunkAPI) => {                       //// payloadCreator(arg, thunkAPI)
//    const { dispatch, getState, extra, requestId, signal, rejectWithValue, fulfillWithValue } = thunkAPI;
//     const { id, ...fields } = userData 
//     try {
//       const response = await bookService.addBook(book);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data.message);
//     }
//   });


// export const fetchSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//       builder.addCase(fetchUser.pending, (state) => {
//         state.loading = 'pending';
//       });
//       builder.addCase(fetchUser.fulfilled, (state, action) => {
//         state.loading = 'succeeded';
//         state.user = action.payload;
//       });
//       builder.addCase(fetchUser.rejected, (state) => {
//         state.loading = 'failed';
//       });
//     },
//   });

// npm install @reduxjs/toolkit react-redux