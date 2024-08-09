import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const getPhoneById = createAsyncThunk(
  "phone/getPhoneById",
  async (tourId, { rejectWithValue }) => {
    try {
      const data = await axiosInstance.get(`/item/${tourId}`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllPhones = createAsyncThunk(
  "phone/getAllPhones",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosInstance.get(`/item`);

      return data.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
