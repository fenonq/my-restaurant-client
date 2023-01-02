import React from 'react';
import ReactPaginate from "react-paginate";
import './PageNav.css';

const PageNav = ({ pageNum, pageChange }) => {
    return (
        <nav className="bottom_nav">
            {/*{pages.map((el) => (*/}
            {/*    <ul className="nav_list" onClick={pageChange} key={el}>*/}
            {/*        {el + 1}*/}
            {/*    </ul>*/}
            {/*))}*/}
            <ReactPaginate
                className="nav_list"
                nextLabel="next >"
                onPageChange={pageChange}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageNum}
                previousLabel="< previous"
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
        </nav>
    );
};

export default PageNav;
