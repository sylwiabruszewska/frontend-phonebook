import { useDispatch } from 'react-redux';

import { StyledFilterInput } from './FilterInput.styled';
import { setFilter } from 'redux/contacts/filterSlice';

export const FilterInput = () => {
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const newFilter = event.target.value;
    dispatch(setFilter(newFilter));
  };

  return (
    <StyledFilterInput
      type="text"
      name="filter"
      placeholder="Search contacts..."
      id="filter-input"
      aria-labelledby="filter-label"
      onChange={handleFilterChange}
    />
  );
};
