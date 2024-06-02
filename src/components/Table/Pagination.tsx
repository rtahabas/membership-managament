import Image from "next/image";
import { Table } from "@tanstack/react-table";
import leftArrow from "@/assets/svg/chevron-left.svg";
import doubleLeftArrow from "@/assets/svg/double-chevron-left.svg";
import rightArrow from "@/assets/svg/chevron-right.svg";
import doubleRightArrow from "@/assets/svg/double-chevron-right.svg";

type Props<T> = {
  table: Table<T>;
};

export function Pagination<T>({ table }: Props<T>) {
  const {
    firstPage,
    lastPage,
    nextPage,
    setPageIndex,
    getPageCount,
    previousPage,
    getCanPreviousPage,
    getCanNextPage,
  } = table;
  getPageCount;
  const canPreviousPage = getCanPreviousPage();
  const canNextPage = getCanNextPage();
  const pageCount = getPageCount();
  const pageIndex = table.getState().pagination.pageIndex;
  const currentPage = pageIndex + 1;

  const paginationRange = () => {
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(pageCount, currentPage + 2);
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  };

  const pageNumbers = paginationRange();

  return (
    <nav className="py-2 flex justify-center" aria-label="Pagination">
      <ul className="flex justify-center space-x-8">
        <button disabled={!canPreviousPage} onClick={firstPage}>
          <Image src={doubleLeftArrow} alt="doubleleftarrow" />
        </button>
        <button disabled={!canPreviousPage} onClick={previousPage}>
          <Image src={leftArrow} alt="leftarrow" />
        </button>
        <ul className="flex justify-center space-x-5 max-w-96 flex-wrap">
          {pageNumbers.map((number) => (
            <li key={number}>
              <button
                onClick={() => setPageIndex(number - 1)}
                className={`px-3 py-2 w-10 rounded-lg focus:outline-none ${
                  currentPage === number ? "bg-primary text-white" : " text-pagination-text-gray"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
        <button disabled={!canNextPage} onClick={nextPage}>
          <Image src={rightArrow} alt="righarrow" />
        </button>
        <button disabled={!canNextPage} onClick={lastPage}>
          <Image src={doubleRightArrow} alt="doubleRightArrow" />
        </button>
      </ul>
    </nav>
  );
}
