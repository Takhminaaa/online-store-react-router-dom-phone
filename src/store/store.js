import { configureStore } from "@reduxjs/toolkit";
import { phoneSlice } from "./slisec/phone-slice";

export const store = configureStore({
  reducer: {
    phone: phoneSlice.reducer,
  },
});
