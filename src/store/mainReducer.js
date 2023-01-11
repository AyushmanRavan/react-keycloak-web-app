import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from '../redux/user/user.slice';

const mainReducer = combineReducers({
    users: usersReducer,
});

export default mainReducer;



// const reducers = combineReducers({
//     [globalSearchSlice.name]: globalSearchSlice.reducer,
//     [imageSearchSlice.name]: imageSearchSlice.reducer,
//   })
 

 // sorting the cart items alphabetically
//  const items = [...useSelector(state => state.cart)].sort((a, b) => {
//     return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
//   });




