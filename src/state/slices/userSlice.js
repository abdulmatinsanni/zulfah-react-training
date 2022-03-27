import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    createUser: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data.push({
        id: Math.random(),
        name: `John Doe ${Math.random()}`,
      });
    },
    updateUser: (state) => {
      //
    },
  },
});

export const { createUser, updateUser } = userSlice.actions;
export default userSlice;
