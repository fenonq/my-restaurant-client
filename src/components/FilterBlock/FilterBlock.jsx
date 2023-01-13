import { SIZE_KEYS, SORT_KEYS_DISHES } from '../../utils/constants';
import FilterSelect from '../ui/FilterSelect/FilterSelect';
import './FilterBlock.css';

const FilterBlock = ({ sizeChange, sortChange }) => {
    const sizeChangeHandler = (event) => {
        sizeChange(event.target.value);
    };

    const sortChangeHandler = (event) => {
        sortChange(event.target.value);
    };

    return (
        <div className="filter-block">
            <FilterSelect
                title="Size: "
                onChange={sizeChangeHandler}
                keys={SIZE_KEYS}
            />
            <FilterSelect
                title="Sort by: "
                onChange={sortChangeHandler}
                keys={SORT_KEYS_DISHES}
            />
        </div>
    );
};

export default FilterBlock;
