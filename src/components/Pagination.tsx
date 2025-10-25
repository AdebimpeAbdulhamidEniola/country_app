import type { PaginationProps } from "../types";


const Pagination = ({ totalCountries, dataPerPage, currentPage, setCurrentPage }: PaginationProps) => {
  const totalPages = Math.ceil(totalCountries / dataPerPage);
  const pages = [];

  // create an array of page numbers
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center gap-2 mt-6">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 py-1 rounded ${
            currentPage === page ? "bg-blue-600 text-white" : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
