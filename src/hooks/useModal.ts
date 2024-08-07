import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "@redux/modal/modalSlice";
import { AppDispatch } from "@redux/store";

export const useModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return {
    handleCloseModal,
    modalRef,
  };
};
