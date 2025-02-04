import { createSlice } from "@reduxjs/toolkit";


const editSlice = createSlice({
  name: "edit",
  initialState: {
    modal: false,
    item: {name: '', number: ''},
    },
  
  reducers: {
    openModal(state, action) {
      state.modal = true;
      state.item = action.payload;
    },
    closeModal(state) {
      state.modal = false;
    },
  },
});


export const { openModal, closeModal } = editSlice.actions;
export default editSlice.reducer;