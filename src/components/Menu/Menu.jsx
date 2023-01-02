import React, { useState } from 'react';
import MenuDishesList from '../MenuDishesList/MenuDishesList';
import './Menu.css';
import FilterBlock from '../FilterBlock/FilterBlock';
import PageNav from '../PageNav/PageNav';

const Menu = () => {
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(4);
    const [sort, setSort] = useState('name');
    const [pageNum, setPageNum] = useState(0);

    const pageChangeHandler = (page) => {
        setPage(page.selected);
    };

    const sizeChangeHandler = (size) => {
        setSize(size);
        setPage(0);
    };

    const sortChangeHandler = (field) => {
        setSort(field);
    };

    const pageNumChangeHandler = (pageNum) => {
        setPageNum(pageNum);
    };

    return (
        <div className="menu-block">
            <h1 className="menu__header">Menu</h1>
            <FilterBlock
                sizeChange={sizeChangeHandler}
                sortChange={sortChangeHandler}
            />
            <MenuDishesList
                page={page}
                size={size}
                sort={sort}
                pageNumChange={pageNumChangeHandler}
            />
            <PageNav pageNum={pageNum} pageChange={pageChangeHandler} />
        </div>
    );
};

export default Menu;
