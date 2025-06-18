/* eslint-disable no-unused-vars */

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
    <div className=" flex" >
      <button
        className="bg-[#ddddddcb] cursor-pointer text-[32px] h-10 w-10 flex items-center justify-center rounded-[5px]"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        >
        <span className="mb-2">&lt;</span>
      </button>

        {pagesNo.map((number,index)=>{
               return <button onClick={()=>{onPageChange(number)}} key={index} className={` ${(currentPage - 1) == index ? "bg-[#FF624C] text-white" : "bg-[#ddd] text-[#303030]"} mx-2 text-[#303030] font-poppins text-xl font-semibold leading-7.5 cursor-pointer h-10 w-10 flex items-center justify-center rounded-[5px]`} > {number} </button>
        })
        }

      <button
        className=" bg-[#ddddddcb] text-[32px] cursor-pointer h-10 w-10 flex items-center justify-center rounded-[5px]"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <span className="mb-2">&gt;</span>
      </button>
    </div>
  );
};

export default Pagination;
