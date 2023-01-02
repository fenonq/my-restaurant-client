import React from 'react';
import './FilterSelect.css';

const FilterSelect = ({ title, onChange, keys }) => {
    return (
        <div className="filter-select">
            <label>{title}</label>
            <div className="select-dropdown">
                <select onChange={onChange}>
                    {keys.map((el) => (
                        <option key={el} value={el}>
                            {el}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default FilterSelect;
