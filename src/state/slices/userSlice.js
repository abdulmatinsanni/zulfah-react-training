import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../services/api";

export const getUsersRequest = createAsyncThunk("user/getUsers", async () => {
  const response = await User.getUsers();
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    populateUsers: (state, action) => {
      state.data = action.payload.data;
    },
    createUser: (state, action) => {
      state.data.push({
        id: Math.random(),
        name: `${action.payload.name} ${Math.random()}`,
      });
    },
    updateUser: (state) => {
      //
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersRequest.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsersRequest.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getUsersRequest.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload?.message || "An error occured";
    });
  },
});

export const { populateUsers, createUser, updateUser } = userSlice.actions;
export default userSlice;
