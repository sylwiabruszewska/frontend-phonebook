import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  modalType: "info" | "edit" | "delete" | null;
}

const initialState: ModalState = {
  isOpen: false,
  modalType: null,
} as ModalState;

const modalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
export type { ModalState };
