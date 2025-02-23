import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  signin_user,
  register_user,
  get_all_users,
  edit_user,
} from "../api/user_api";

const initialState= {
  user: {},
  loading: false,
  error: null,
}
// Async thunks for user API actions
export const signinUser = createAsyncThunk(
  "user/signin",
  async (user, thunkAPI) => {
    const response = await signin_user(user);
    localStorage.setItem(response)
    return response;
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try{    const response = await register_user(user);
      console.log(response)
      return response;
    }catch(e){
      return rejectWithValue(error);

    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAll",
  async (thunkAPI) => {
    const response = await get_all_users();
    return response.data;
  }
);

export const editUser = createAsyncThunk(
  "user/edit",
  async ({ id, user }, thunkAPI) => {
    const response = await edit_user(id, user);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,


  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signinUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signinUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user=action.payload;

      })
      .addCase(signinUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        // Handle user registration success
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        // Handle user edit success
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const userReducer =  userSlice.reducer;
