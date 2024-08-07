import { RootState } from "@redux/store";

export const selectModalOpen = (state: RootState) => state.modal.isOpen;
export const selectModalType = (state: RootState) => state.modal.modalType;
