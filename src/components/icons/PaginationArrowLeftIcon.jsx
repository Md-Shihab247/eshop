
const PaginationArrowLeftIcon = ({pageChange,currentPage})=> {

  // console.log(currentPage);
  
  return (
    <button disabled={currentPage == 1} onClick={()=> pageChange(currentPage - 1)} className=' cursor-pointer'>
    <svg
     xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
     <path d="M9.99994 16.0001C9.99994 16.2558 10.0977 16.5118 10.2929 16.7071L20.2929 26.7071C20.6837 27.0978 21.3164 27.0978 21.7069 26.7071C22.0974 26.3163 22.0977 25.6836 21.7069 25.2931L12.4139 16.0001L21.7069 6.70706C22.0977 6.31631 22.0977 5.68356 21.7069 5.29306C21.3162 4.90256 20.6834 4.90231 20.2929 5.29306L10.2929 15.2931C10.0977 15.4883 9.99994 15.7443 9.99994 16.0001Z" fill="#303030"/>
     </svg>
    </button>
  )
}

export default PaginationArrowLeftIcon