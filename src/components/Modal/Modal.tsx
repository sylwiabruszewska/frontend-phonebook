import { useSelector } from "react-redux";

import { Button } from "@components/Button/Button";
import { ButtonIcon } from "@components/ButtonIcon/ButtonIcon.js";

import { useModal } from "@hooks/useModal";
import { selectModalType } from "@redux/modal/selectors";
import {
  StyledOverlay,
  StyledIconClose,
  StyledBoxForButton,
  StyledModalTitle,
  StyledModalBox,
  StyledModalContent,
  StyledModalContainer,
} from "./Modal.styled.js";

export const Modal = () => {
  const { handleCloseModal, modalRef } = useModal();
  const modalType = useSelector(selectModalType);

  const handleCloseButton = () => {
    handleCloseModal();
  };

  const renderContent = () => {
    switch (modalType) {
      case "info":
        return <p>Information content goes here</p>;
      case "edit":
        return <textarea placeholder="Edit content here"></textarea>;
      case "delete":
        return (
          <div>
            <p>Are you sure you want to delete this item?</p>
            <button>Delete</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <StyledOverlay>
      <StyledModalContainer
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
      >
        <StyledBoxForButton>
          <ButtonIcon onClick={handleCloseButton} ariaLabel="close modal">
            <StyledIconClose />
          </ButtonIcon>
        </StyledBoxForButton>
        <StyledModalBox>
          <StyledModalTitle id="modal-title">title</StyledModalTitle>
          <StyledModalContent id="modal-content">content</StyledModalContent>
          {renderContent()}
          <Button type="button">button</Button>
        </StyledModalBox>
      </StyledModalContainer>
    </StyledOverlay>
  );
};
