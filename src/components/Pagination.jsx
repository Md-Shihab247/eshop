
import PaginationArrowLeftIcon from "../components/icons/PaginationArrowLeftIcon";
import PaginationArrowRightIcon from "../components/icons/PaginationArrowRightIcon";

const Pagination = ({
  totalProducts,
  parPageProducts,
  currentPage,
  onPageChange,
}) => {
  let totalPages = Math.ceil(totalProducts / parPageProducts);
  let maxPageShow = 5;
  let pages = []

  if ( totalPages <= maxPageShow) {
       for (let i = 0; i < pages.length; i++) {
         pages.push(i)
       }
  }else{

      let startPages = [1,2,3]
      let endPages = [totalPages]
      let middlePage = [currentPage,currentPage + 1].filter((page) => page > 2 && page <= totalPages)

      let uniquePages = Array.from(new Set([...startPages, ...middlePage, ...endPages])).sort((a,b)=> a - b)

       for (let i = 0; i < uniquePages.length; i++) {
            pages.push(uniquePages[i])

            if (i < uniquePages.length -1 && uniquePages[i + 1] - uniquePages[i] > 1) {
               if (!pages.includes("...")) {
                  pages.push("...")
               }
             }
           }
        }

  return (
    <div className=" flex justify-center my-20">
      <PaginationArrowLeftIcon
        currentPage={currentPage}
        pageChange={onPageChange}
        isDisabled={currentPage === 1}
      />

      {pages.map((number) => {
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
