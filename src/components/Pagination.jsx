
import PaginationArrowLeftIcon from "../components/icons/PaginationArrowLeftIcon";
import PaginationArrowRightIcon from "../components/icons/PaginationArrowRightIcon";

const Pagination = ({
  totalProducts,
  parPageProducts,
  currentPage,
  onPageChange,
}) => {
  let totalPages = Math.ceil(totalProducts / parPageProducts);
  let maxPageShow = 10;
  let pagesShowBeforeAfter = 3;
  let startPage = Math.max(1, currentPage - pagesShowBeforeAfter);
  let endPage = Math.min(totalPages, currentPage + pagesShowBeforeAfter);

  if (endPage - startPage + 1 < maxPageShow) {
    if (startPage > 1) {
      startPage = Math.max(1, endPage - maxPageShow + 1);
    }
    endPage = Math.min(totalPages, startPage + maxPageShow - 1);
  }

  let pagesNo = [];
  for (let i = startPage; i <= endPage; i++) {
    pagesNo.push(i);
  }

  return (
    <div className=" flex justify-center my-20">
      <PaginationArrowLeftIcon
        currentPage={currentPage}
        pageChange={onPageChange}
        isDisabled={currentPage === 1}
      />

      {pagesNo.map((number) => {
        return (
          <button
            onClick={() => {
              onPageChange(number);
            }}
            key={number}
            className={`${
              currentPage === number ? "bg-[#FF624C] text-white" : "hover:bg-[#ddd]"
            } mx-2 text-[#303030] font-poppins text-xl font-semibold leading-7.5 cursor-pointer h-10 w-10 flex items-center justify-center rounded-[5px] transition-all`}
          >
            {number}
          </button>
        );
      })}


      <PaginationArrowRightIcon
        isDisabled={currentPage === totalPages}
        pageChange={onPageChange}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Pagination;
