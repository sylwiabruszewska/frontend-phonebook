import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux";

import { Loader } from "@components/Loader/Loader";
import { Navigation } from "@components/Navigation/Navigation";
import { Content } from "@components/Content/Content";
import { Modal } from "@components/Modal/Modal";

import { StyledHeader } from "./SharedLayout.styled";
import { selectModalOpen } from "@redux/modal/selectors";
import { ScrollToTop } from "@components/ScrollToTop/ScrollToTop";

export const SharedLayout = () => {
  const modalOpen = useSelector(selectModalOpen);

  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>

      <Content>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Content>

      {modalOpen && <Modal />}

      <ScrollToTop />
    </>
  );
};
