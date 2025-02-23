import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3005/users"; // Replace with your actual backend API URL

// ✅ Create an async thunk for login
export const login = createAsyncThunk(
  "user/login",
  async ({ email, password, navigate }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${baseURL}?email=${email}&password=${password}`
      );
      const data = response.data;

      if (data.length) {
        navigate("/");
        return data[0];
      } else {
        return rejectWithValue("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue("Something went wrong. Please try again.");
    }
  }
);

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
