import { useSelector, useDispatch } from "react-redux";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { StyledPagination, StyledPaginationButton } from "./Pagination.styled";
import { selectCurrentPage, selectTotalPages } from "@redux/contacts/selectors";
import { setCurrentPage } from "@redux/contacts/contactsSlice";

export const Pagination = () => {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    dispatch(setCurrentPage(page));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Link to={`/contacts/page/${i}`} key={i}>
          <StyledPaginationButton
            className={i === currentPage ? "current-page" : ""}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </StyledPaginationButton>
        </Link>
      );
    }
    return pageNumbers;
  };

  return (
    <StyledPagination>
      <Link to={`/contacts/page/${currentPage - 1}`}>
        <StyledPaginationButton
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <FaAngleLeft />
        </StyledPaginationButton>
      </Link>

      {renderPageNumbers()}

      <Link to={`/contacts/page/${currentPage + 1}`}>
        <StyledPaginationButton
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <FaAngleRight />
        </StyledPaginationButton>
      </Link>
    </StyledPagination>
  );
};
