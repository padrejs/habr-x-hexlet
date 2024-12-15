import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Filters.css';

const Filters = () => {
    const dispatch = useDispatch();
    const [platform, setPlatform] = useState('');
    const [minRating, setMinRating] = useState(0);
    const [maxRating, setMaxRating] = useState(5);

    const handlePlatformChange = (e) => {
        const value = e.target.value;
        setPlatform(value);
        dispatch({ type: 'SET_PLATFORM_FILTER', payload: value });
    };

    const handleRatingChange = () => {
        const range = [minRating, maxRating];
        dispatch({ type: 'SET_RATING_FILTER', payload: range });
    };

    return (
        <div className="filters-container">
            <div>
                <label>Платформа: </label>
                <select value={platform} onChange={handlePlatformChange} className="filters-input">
                    <option value="">Все</option>
                    <option value="Google">Google</option>
                    <option value="Яндекс">Яндекс</option>
                    <option value="2ГИС">2ГИС</option>
                </select>
            </div>
            <div>
                <label>Рейтинг: </label>
                <input
                    type="number"
                    min="0"
                    max="5"
                    value={minRating}
                    onChange={(e) => setMinRating(Number(e.target.value))}
                    onBlur={handleRatingChange}
                    className="filters-input"
                />
                -
                <input
                    type="number"
                    min="0"
                    max="5"
                    value={maxRating}
                    onChange={(e) => setMaxRating(Number(e.target.value))}
                    onBlur={handleRatingChange}
                    className="filters-input"
                />
            </div>
        </div>
    );
};

export default Filters;
