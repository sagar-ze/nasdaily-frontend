import React from 'react';

function Category(props) {
    return (
        <div className='categoryContainer'>
            <button className="activeBtn">
                New
            </button>
            <button className="btn">
                Past
            </button>
            {/* <button className="activeBtn">
                New
            </button>
            <button className="btn">
                Past
            </button>  <button className="activeBtn">
                New
            </button>
            <button className="btn">
                Past
            </button>  <button className="activeBtn">
                New
            </button>
            <button className="btn">
                Past
            </button>
            <button className="activeBtn">
                New
            </button>
            <button className="btn">
                Past
            </button> */}
        </div>
    );
}

export default Category;