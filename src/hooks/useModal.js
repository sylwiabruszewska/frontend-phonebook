import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeModal } from 'redux/modal/modalSlice';

export const useModal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return {
    handleCloseModal,
  };
};
