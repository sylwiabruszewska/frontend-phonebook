import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/Button';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { StyledBox, StyledSpan, StyledBoldSpan } from './UserMenu.styled';
import { FiLogOut } from 'react-icons/fi';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <StyledBox>
      <StyledSpan>
        Nice to see you, <StyledBoldSpan>{userName}</StyledBoldSpan>
      </StyledSpan>

      <Button type="button" handler={handleLogOut}>
        Logout <FiLogOut />
      </Button>
    </StyledBox>
  );
};
