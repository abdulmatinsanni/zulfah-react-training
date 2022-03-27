import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    populateUsers: (state, action) => {
      state.data = action.payload.data;
    },
    createUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data.push({
        id: Math.random(),
        name: `${action.payload.name} ${Math.random()}`,
      });
    },
    updateUser: (state) => {
      //
    },
  },
});

export const { populateUsers, createUser, updateUser } = userSlice.actions;
export default userSlice;
