import React from 'react';
import {useDispatch} from 'react-redux';
import './Sorting.css';

const Sorting = () => {
    const dispatch = useDispatch();

    const handleSortChange = (e) => {
        const [field, order] = e.target.value.split('-');
        dispatch({type: 'SET_SORTING', payload: {field, order}});
    };

    return (
        <div className="sorting-container">
            <label>Сортировка: </label>
            <select onChange={handleSortChange}>
                <option value="date-asc">Дата (по возрастанию)</option>
                <option value="date-desc">Дата (по убыванию)</option>
                <option value="rating-asc">Рейтинг (по возрастанию)</option>
                <option value="rating-desc">Рейтинг (по убыванию)</option>
            </select>
        </div>
    );
};

export default Sorting;
