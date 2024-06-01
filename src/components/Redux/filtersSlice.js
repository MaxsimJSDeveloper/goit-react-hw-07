// import { createSlice } from "@reduxjs/toolkit";
// import { handlePending, handleRejected } from "./contactsSlice";

// const filterSlice = createSlice({
//   name: "filter",
//   initialState: { name: "" },
//   extraReducers: (builder) => {
//     builder
//       .addCase(findContacts.rejected, handleRejected)
//       .addCase(findContacts.pending, handlePending)
//       .addCase(findContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       });
//   },
// });
// export const filterReducer = filterSlice.reducer;
