import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Loader, Navigation, Modal } from 'components';
import { StyledHeader } from './SharedLayout.styled';
import { selectModalOpen } from 'redux/modal/selectors';

export const SharedLayout = () => {
  const modalOpen = useSelector(selectModalOpen);

  return (
    <>
      <StyledHeader>
        <Navigation />
      </StyledHeader>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {modalOpen && <Modal />}
    </>
  );
};
