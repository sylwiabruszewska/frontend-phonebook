import { StyledFilterInput } from "./FilterInput.styled";
import { StyledLabel } from "@components/Input/Input.styled";
import { setFilter } from "@redux/contacts/contactsSlice";
import { setCurrentPage } from "@redux/contacts/contactsSlice";
import { useAppDispatch } from "@hooks/useAppDispatch";

export const FilterInput = () => {
  const dispatch = useAppDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
    dispatch(setFilter(newFilter));
    dispatch(setCurrentPage(1));
  };

  return (
    <>
      <StyledLabel htmlFor="filter-input">Search contacts</StyledLabel>
      <StyledFilterInput
        id="filter-input"
        type="text"
        name="filter"
        placeholder="Search contacts..."
        onChange={handleFilterChange}
      />
    </>
  );
};
