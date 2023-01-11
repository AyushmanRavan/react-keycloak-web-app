// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const initialState = {
//     usersData: [],
//     loading: true,
//     error: null
// };
  
// const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         //   builder.addCase(fetchUsers.pending, (state) => {
//         //       state.loading = 'pending';
//         //   });
//         //   builder.addCase(fetchUsers.fulfilled, (state, action) => {
//         //       state.loading = 'succeeded';
//         //       state.user = action.payload;
//         //   });
//         //   builder.addCase(fetchUsers.rejected, (state) => {
//         //       state.loading = 'failed';
//         //   });
//     }
//     //  =============OR==========(state, action)===
//     // extraReducers: {
//            //   [fetchUsers.fulfilled]: (state, { meta, payload })=> {  
//            //     state.usersData = payload;
//            //     state.loading = false;
//            //    },
//            //   [fetchUsers.pending]: (state, { meta })=>{
//            //     state.loading = true;
//            //   },
//            //   [fetchUsers.rejected]: (state,{meta,payload,error })=>{
//            //     state.error = error;
//            //     state.loading = true;
//            //   }
//     //  }
// });
  
// // export const { fetchUsers } = userSlice.actions
// export default userSlice.reducer;
// // export const userSelector = state => state.user






// export const signupUser = createAsyncThunk(
//   'users/signupUser',
//   async ({ name, email, password }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'https://mock-user-auth-server.herokuapp.com/api/v1/users',
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             password,
//           }),
//         }
//       );
//       let data = await response.json();
//       console.log('data', data);

//       if (response.status === 200) {
//         localStorage.setItem('token', data.token);
//         return { ...data, username: name, email: email };
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'users/login',
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'https://mock-user-auth-server.herokuapp.com/api/v1/auth',
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email,
//             password,
//           }),
//         }
//       );
//       let data = await response.json();
//       console.log('response', data);
//       if (response.status === 200) {
//         localStorage.setItem('token', data.token);
//         return data;
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

// export const fetchUserBytoken = createAsyncThunk(
//   'users/fetchUserByToken',
//   async ({ token }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'https://mock-user-auth-server.herokuapp.com/api/v1/users',
//         {
//           method: 'GET',
//           headers: {
//             Accept: 'application/json',
//             Authorization: token,
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       let data = await response.json();
//       console.log('data', data, response.status);

//       if (response.status === 200) {
//         return { ...data };
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     username: '',
//     email: '',
//     isFetching: false,
//     isSuccess: false,
//     isError: false,
//     errorMessage: '',
//   },
//   reducers: {
//     clearState: (state) => {
//       state.isError = false;
//       state.isSuccess = false;
//       state.isFetching = false;

//       return state;
//     },
//   },
//   extraReducers: {
//     [signupUser.fulfilled]: (state, { payload }) => {
//       console.log('payload', payload);
//       state.isFetching = false;
//       state.isSuccess = true;
//       state.email = payload.user.email;
//       state.username = payload.user.name;
//     },
//     [signupUser.pending]: (state) => {
//       state.isFetching = true;
//     },
//     [signupUser.rejected]: (state, { payload }) => {
//       state.isFetching = false;
//       state.isError = true;
//       state.errorMessage = payload.message;
//     },
//     [loginUser.fulfilled]: (state, { payload }) => {
//       state.email = payload.email;
//       state.username = payload.name;
//       state.isFetching = false;
//       state.isSuccess = true;
//       return state;
//     },
//     [loginUser.rejected]: (state, { payload }) => {
//       console.log('payload', payload);
//       state.isFetching = false;
//       state.isError = true;
//       state.errorMessage = payload.message;
//     },
//     [loginUser.pending]: (state) => {
//       state.isFetching = true;
//     },
//     [fetchUserBytoken.pending]: (state) => {
//       state.isFetching = true;
//     },
//     [fetchUserBytoken.fulfilled]: (state, { payload }) => {
//       state.isFetching = false;
//       state.isSuccess = true;

//       state.email = payload.email;
//       state.username = payload.name;
//     },
//     [fetchUserBytoken.rejected]: (state) => {
//       console.log('fetchUserBytoken');
//       state.isFetching = false;
//       state.isError = true;
//     },
//   },
// });

// export const { increment, decrement } = userSlice.actions
// export default userSlice.reducer
// export const userSelector = state => state.user





















// const updateUser = createAsyncThunk(
//     'users/update',
//     async (userData, { rejectWithValue }) => {
//       const { id, ...fields } = userData
//       try {
//         const response = await userAPI.updateById(id, fields)
//         return response.data.user
//       } catch (err) {
//         if (!err.response) {
//           throw err
//         }
  
//         return rejectWithValue(err.response.data)
//       }
//     }
//   )

// createAsyncThunk accepts three parameters:
// 1) type: “todo/fetchList”. The general naming convention followed is {reducerName}/{actionType}
// 2) payloadCreator: is the callback function (async (_, { rejectWithValue })=>{}), the first param is the argument which is passed to the callback. The second param is the thunkApi.
// 3) options: is an object with two props, condition is a callback which returns a bool that can be used to skip execution, dispatchConditionRejection uses the condition to dispatch the action. If condition is false dispatchConditionRejection will not dispatch any action.

// The ThunkApi is important, because you will be depending on the properties defined in it, most of the time. They are:
// ===================================================
// 1) dispatch: dispatching different actions.
// 2) getState: to access the redux store from within the callback
// 3) requestId: this is a unique id redux-toolkit generates for each request
// 4) signal: this can be used to cancel request.
// 5) rejectWithValue: is a utility function that can return to the action creator a defined payload, in case of error.
// 6) extra: the “extra argument” given to the thunk middleware on setup, if available

// Promise Lifecycle Actions:
// ===================================
// pending: before the callback is called in the payloadCreator
// fulfilled: on successful executions
// rejected: in case of an error

//   [fetchToDoList.fulfilled]: (state, { meta, payload })=> {  
//     state.todoList = payload;
//    },
//   [fetchToDoList.pending]: (state, { meta })=>{
//     state.loading = "pending";
//   },
//   [fetchToDoList.rejected]: (state,{meta,payload,error })=>{
//     state.error = error;
//   }

// Each lifecycle is passed the reducer state(no the store obj) and the thunk action creator, which contains the payload(return value) on fulfilled/rejected, 
// meta which contains the requestId and the args passed to the payloadCreator, error in case of rejected.

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// //axios api
// import { getList, updateTodo, addTodo } from "../../api/todoApi";

// const initialState = {
//   todoList: [],
//   currentRequestId: "",
//   loading: "fin",
//   error: "",
// };

// export const fetchToDoList = createAsyncThunk(
//   "todo/fetchList",
//   async (_, { rejectWithValue }) => {
//     try {
//       const list = await getList();
//       return list;
//     } catch (err) {
//       return rejectWithValue([], err);
//     }
//   }
// );

// export const updateToDo = createAsyncThunk(
//   "todo/updateToDo",
//   async (todo, { rejectWithValue }) => {
//     try {
//       const list = await updateTodo(todo);
//       return list;
//     } catch (err) {
//       return rejectWithValue([], err);
//     }
//   }
// );

// export const addNewTodo = createAsyncThunk(
//   "todo/addNewTodo",
//   async (todo, { rejectWithValue }) => {
//     try {
//       const list = await addTodo(todo);
//       return list;
//     } catch (err) {
//       return rejectWithValue([], err);
//     }
//   }
// );

// const { actions, reducer } = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [fetchToDoList.fulfilled]: (state, { meta, payload }) => {
//       if (meta.requestId === state.currentRequestId.requestId) {
//         state.todoList = payload;
//         state.loading = "fin";
//         state.currentRequestId = "";
//       }
//     },
//     [fetchToDoList.pending]: (state, { meta }) => {
//       state.currentRequestId = meta;
//       state.loading = "pending";
//     },
//     [fetchToDoList.rejected]: (state, { meta, payload, error }) => {
//       if (meta.requestId === state.currentRequestId.requestId) {
//         state.currentRequestId = meta;
//         state.loading = "fin";
//         state.todoList = payload;
//         state.error = error;
//       }
//     },
//     [updateToDo.fulfilled]: (state, { meta, payload }) => {
//       if (meta.requestId === state.currentRequestId.requestId) {
//         state.todoList = payload;
//         state.loading = "fin";
//         state.currentRequestId = "";
//       }
//     },
//     [updateToDo.pending]: (state, { meta }) => {
//       state.currentRequestId = meta;
//       state.loading = "pending";
//     },
//     [updateToDo.rejected]: (state, { meta, payload, error }) => {
//       if ((meta.requestId === state.currentRequestId.requestId) {
//         state.currentRequestId = meta;
//         state.loading = "fin";
//         state.todoList = payload;
//         state.error = error;
//       }
//     },
//     [addNewTodo.fulfilled]: (state, { meta, payload }) => {
//       if (meta.requestId === state.currentRequestId.requestId) {
//         state.todoList = payload;
//         state.loading = "fin";
//         state.currentRequestId = "";
//       }
//     },
//     [addNewTodo.pending]: (state, { meta }) => {
//       state.currentRequestId = meta;
//       state.loading = "pending";
//     },
//     [addNewTodo.rejected]: (state, { meta, payload, error }) => {
//       if (meta.requestId === state.currentRequestId.requestId) {
//         state.currentRequestId = meta;
//         state.loading = "fin";
//         state.todoList = payload;
//         state.error = error;
//       }
//     },
//   },
// });

// export default reducer;