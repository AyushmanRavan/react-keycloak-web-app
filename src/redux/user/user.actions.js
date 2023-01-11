import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from "../../services/http-api"

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (data,thunkAPI) => {
    try {
      const response = await apiService.getAllRequest("/keycloak/users-list/ORGA2");
      return response.data;//let data = await response.json();
    } catch (error) {
      console.error(error)
      console.log(error.message);
      // return thunkAPI.rejectWithValue({ error: error.?response?.data });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ( userId, { rejectWithValue }) => {
    try {
      const response = await apiService.getRequest("/keycloak/user-by-name/ORGA2",userId);;
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async ( userId, { rejectWithValue }) => {
    try {
      const response = await apiService.deleteRequest("/keycloak/delete-user/ORGA2",userId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData, { rejectWithValue }) => {
    try {
    const { payload, navigate } = userData;
      const response = await apiService.createRequest("/keycloak/create-user", payload);
      navigate("/users-list");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ payload, userId, navigate }, { rejectWithValue }) => {
    try {
      console.log(payload, userId, navigate)
      const response = await apiService.updateRequest("/keycloak/update-user", payload);
      navigate("/users-list");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);














// =================================================================================================================== //


// export const createUser = createAsyncThunk(
//   "user/createUser",
//   async ({ payload, navigate, toast }, { rejectWithValue }) => {
//     try {
//       const response = await apiService.createRequest("/tour", payload);
//       toast.success("Added Successfully");
//       navigate("/dashboard");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async ({ userId, payload, toast, navigate }, { rejectWithValue }) => {
//     try {
//       const response = await apiService.updateRequest(`/tour/${userId}`, payload);
//       toast.success("Tour Updated Successfully");
//       navigate("/dashboard");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchUser = createAsyncThunk(
//   "user/fetchUser",
//   async (userId, { rejectWithValue }) => {
//     try {
//       const response = await apiService.getRequest(`/tour/userTours/${userId}`);;
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteUser = createAsyncThunk(
//   "user/deleteUser",
//   async ({ userId, toast }, { rejectWithValue }) => {
//     try {
//       const response = await apiService.deleteRequest(`/tour/${userId}`);
//       toast.success("Tour Deleted Successfully");
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );