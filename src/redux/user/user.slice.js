import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, fetchUser, createUser, deleteUser, updateUser } from './user.actions'
// https://dev.to/julfikarhaidar/redux-toolkit-crud-example-with-react-hooks-4d98
const initialState = {
    users: [],
    status:'idle',
    error: null,
    userData:{}
};
  
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'rejected';
            // state.error = action.error.message
            state.error = action.payload
        });
        builder.addCase(fetchUser.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            state.userData = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        });
        builder.addCase(createUser.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        });
        builder.addCase(deleteUser.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            const {
              arg: { userId },
            } = action.meta;
            if (userId) {
                state.users = state.users.filter((item) => item.username !== userId);
            }
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        });
        builder.addCase(updateUser.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.error = null;
            const {
                arg: { userId },
            } = action.meta;
            if (userId) {
                state.users = state.users.map((item) => item.username === userId ? action.payload : item );
            }
        });
        builder.addCase(updateUser.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        });
    }
    //  =============OR==========(state, action)===
    // extraReducers: {
           //   [fetchUsers.fulfilled]: (state, { meta, payload })=> {  
           //     state.usersData = payload;
           //     state.loading = false;
           //    },
           //   [fetchUsers.pending]: (state, { meta })=>{
           //     state.loading = true;
           //   },
           //   [fetchUsers.rejected]: (state,{meta,payload,error })=>{
           //     state.error = error;
           //     state.loading = true;
           //   }
    //  }
});



//     [updateTour.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [updateTour.fulfilled]: (state, action) => {
//       state.loading = false;
//       const {
//         arg: { id },
//       } = action.meta;
//       if (id) {
//         state.userTours = state.userTours.map((item) =>
//           item._id === id ? action.payload : item
//         );
//         state.tours = state.tours.map((item) =>
//           item._id === id ? action.payload : item
//         );
//       }
//     },
//     [updateTour.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     }



  
// export const { fetchUsers } = userSlice.actions
export default userSlice.reducer;
// export const getAllUsersData = (state) => state.users.usersData;
// export const getStatus = (state) => state.users.status;
// export const getError = (state) => state.users.error;
// export const getUserById = (id) => {
//     return (state) => state.users.usersData.filter((_) => _.id === id)[0];
// };



// https://dev.to/julfikarhaidar/redux-toolkit-crud-example-with-react-hooks-4d98




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import API from "../api";

// export const createTour = createAsyncThunk(
//   "tour/createTour",
//   async ({ updatedTourData, navigate, toast }, { rejectWithValue }) => {
//     try {
//       const response = await API.post("/tour", updatedTourData);
//       toast.success("Added Successfully");
//       navigate("/dashboard");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );


// export const getToursByUser = createAsyncThunk(
//   "tour/getToursByUser",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await API.get(`/tour/userTours/${userId}`);;
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );


// export const updateTour = createAsyncThunk(
//   "tour/updateTour",
//   async ({ id, updatedTourData, toast, navigate }, { rejectWithValue }) => {
//     try {
//       const response = await API.patch(`/tour/${id}`, updatedTourData);
//       toast.success("Tour Updated Successfully");
//       navigate("/dashboard");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// export const deleteTour = createAsyncThunk(
//   "tour/deleteTour",
//   async ({ id, toast }, { rejectWithValue }) => {
//     try {
//       const response = await API.delete(`/tour/${id}`);
//       toast.success("Tour Deleted Successfully");
//       return response.data;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const initialState = {
//     tour: {},
//     tours: [],
//     userTours: [],
//     tagTours: [],
//     relatedTours: [],
//     currentPage: 1,
//     numberOfPages: null,
//     error: "",
//     loading: false,
// }

// const tourSlice = createSlice({
//   name: "tour",
//   initialState,
//   reducers: {
//     setCurrentPage: (state, action) => {
//       state.currentPage = action.payload;
//     },
//   },
//   extraReducers: {
//     [createTour.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [createTour.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.tours = [action.payload];
//     },
//     [createTour.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },
//     [getToursByUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [getToursByUser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.userTours = action.payload;
//     },
//     [getToursByUser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },

//     [updateTour.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [updateTour.fulfilled]: (state, action) => {
//       state.loading = false;
//       const {
//         arg: { id },
//       } = action.meta;
//       if (id) {
//         state.userTours = state.userTours.map((item) =>
//           item._id === id ? action.payload : item
//         );
//         state.tours = state.tours.map((item) =>
//           item._id === id ? action.payload : item
//         );
//       }
//     },
//     [updateTour.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     }
//     ,
//     [deleteTour.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [deleteTour.fulfilled]: (state, action) => {
//       state.loading = false;
//       const {
//         arg: { id },
//       } = action.meta;
//       if (id) {
//         state.userTours = state.userTours.filter((item) => item._id !== id);
//         state.tours = state.tours.filter((item) => item._id !== id);
//       }
//     },
//     [deleteTour.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.message;
//     },

//   },
// });

// export const { setCurrentPage } = tourSlice.actions;

// export default tourSlice.reducer;