import styles from "./styles.module.css";

const Pagination = ({
  totalPages,
  handlePrevPage,
  handleNextPage,
  handlePageClick,
  currentPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevPage} className={styles.arrow} disabled={currentPage === 1}>
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <button
              onClick={() => handlePageClick(pageNumber)}
              className={`${styles.pageNumber} ${currentPage === pageNumber ? styles.active : ''}`}
              key={index}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button onClick={handleNextPage} className={styles.arrow} disabled={currentPage === totalPages}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
