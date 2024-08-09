import { createSlice } from "@reduxjs/toolkit";
import { getAllPhones, getPhoneById } from "../thunks/phoneThanks";

export const phoneSlice = createSlice({
  name: "phone",
  initialState: {
    phones: [],
    phoneById: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhoneById.fulfilled, (state, action) => {
        state.phoneById = [action.payload];
      })
      .addCase(getAllPhones.fulfilled, (state, action) => {
        state.phones = action.payload;
      });
  },
});
