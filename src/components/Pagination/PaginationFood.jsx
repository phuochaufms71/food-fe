/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./PaginationFood.module.scss";
import { useSelector } from "react-redux";
import { getFoodsFromStore } from "../../redux/food/foodSlice";

function PaginationFood({ itemsPerPage, setCurrentItems }) {
    const { foods } = useSelector(getFoodsFromStore);
    
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      const endOffset = itemOffset + itemsPerPage;

      setCurrentItems(foods.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(foods.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    const handlePageClick = (event) => {
      const newOffset = event.selected * itemsPerPage % foods.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <ReactPaginate
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
}

export default PaginationFood;