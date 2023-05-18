import React, { useState } from "react";
import { useCoinsContext } from "../context/CoinsContext";
import '../styles/Pagination.css'

const Pagination = () => {
  const { postPerPage, totalPosts, paginate, currentPage } = useCoinsContext();
  const [lastDisplayedPage, setLastDisplayedPage] = useState(0);
  const totalPages =  Math.ceil(totalPosts / postPerPage)

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    paginate(pageNumber);
    setLastDisplayedPage(pageNumber);
  };

  const displayPageNumbers = () => {
    const visiblePageNumbers = [];

    if (lastDisplayedPage === 0 || lastDisplayedPage <= 5) {
      // Display the first 10 page numbers
      visiblePageNumbers.push(...pageNumbers.slice(0, 5));
    } else if (lastDisplayedPage > totalPages - 5) {
      // Display the last 10 page numbers
      visiblePageNumbers.push(...pageNumbers.slice(totalPages - 5));
    } else {
      // Display the previous and next 4 page numbers, plus the current page
      const start = lastDisplayedPage - 2;
      const end = lastDisplayedPage + 2;
      visiblePageNumbers.push(...pageNumbers.slice(start - 1, end));
    }

    return visiblePageNumbers.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={pageNumber === currentPage ? "active" : ""}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </button>
      {displayPageNumbers()}
      {lastDisplayedPage <= totalPages - 5 && (
        <button onClick={() => handlePageChange(lastDisplayedPage + 5)} disabled={currentPage === totalPages}>
          ...
        </button>
      )}
      <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
