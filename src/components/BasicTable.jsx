import DataTable from "react-data-table-component";
import { getColumns } from "../utils";

const BasicTable = ({ data }) => {
  const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    currentPage,
  }) => {
    const getNumberOfPages = (rowCount, rowsPerPage) =>
      Math.ceil(rowCount / rowsPerPage);

    const toPages = (pages) => {
      const results = [];

      for (let i = 1; i < pages + 1; i++) {
        results.push(i);
      }
      return results;
    };

    const handleBackButtonClick = () => {
      onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
      onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
      onChangePage(Number(e.target.value));
    };

    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
          >
            Anterior
          </button>
        </li>
        {pageItems.map((page) => {
          const className =
            page === currentPage ? "page-item active" : "page-item";

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
          >
            Siguente
          </button>
        </li>
      </ul>
    );
  };

  return (
    <DataTable
      columns={getColumns(data[0])}
      data={data}
      pagination
      paginationComponent={BootyPagination}
      defaultSortFieldID={2}
    />
  );
};

export default BasicTable;
