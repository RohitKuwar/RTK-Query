import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",

  async () => {
    const response = await fetch("https://dummyjson.com/users");

    const data = await response.json();

    return data.users;
  }
);

const userSlice = createSlice({
  name: "users",

  initialState: {
    users: [],
    selectedUser: null
  },

  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },

    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },

    setUsers: (state, action) => {
      state.users = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
});

export const { addUser, removeUser, selectUser, setUsers } = userSlice.actions;

export default userSlice.reducer;