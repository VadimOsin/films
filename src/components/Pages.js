import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './Pagination.css'
const Pages = ({pageCount, active, setActivePages}) => {

    let pages = [];
    for (let number = 1; number <= pageCount; number++) {
        pages.push(number);
    }
    return (
        <Pagination className='pagination'>
            {pages?.map((page, index) =>
                <Pagination.Item
                    key={page}
                    active={index + 1 === active ? active : ''}
                    onClick={() => setActivePages(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
};

export default Pages;