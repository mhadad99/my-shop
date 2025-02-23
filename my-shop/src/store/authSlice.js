import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../api/authApi";

const saveUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  isLoading: false,
  error: null,
};

// Login action
export const loginAction = createAsyncThunk(
  "auth/loginAction",
  async (credentials, { rejectWithValue }) => {
    try {
      const user = await loginUser(credentials);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Register action
export const registerAction = createAsyncThunk(
  "auth/registerAction",
  async (newUser, { rejectWithValue }) => {
    try {
      const user = await registerUser(newUser);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      saveUserToLocalStorage(action.payload);
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // Register
    builder.addCase(registerAction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(registerAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      saveUserToLocalStorage(action.payload);
    });
    builder.addCase(registerAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { logout } = authSlice.actions;
export const authReducer =  authSlice.reducer;