import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { isRejectedWithValue }) => {
    const response = await fetch("http://localhost:2000/signUp", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      if (result === "INSERT") {
        alert("Registration successful");
        console.log(data);
      } else if (result.code === "23505") {
        alert("This email already exist");
      } else {
        alert(result);
      }
      return result;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
// read action
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectedWithValue }) => {
    const response = await fetch("http://localhost:2000/show");
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
// read action
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (email, { rejectedWithValue }) => {
    const response = await fetch("http://localhost:2000/delete", {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(email),
    });
    try {
      const result = await response.json();
      if (result === 1) {
        alert("Your Account delete successfully");
      } else {
        alert("Something went wrong!!!!!!!");
      }
      return email;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

// signIn action



export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { email } = action.payload;
      if (email) {
        state.users = state.users.filter((ele) => ele.email !== email);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userDetail.reducer;
