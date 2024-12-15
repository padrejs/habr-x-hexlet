import React from 'react';
import { useSelector } from 'react-redux';
import './ReviewsTable.css';

const ReviewsTable = () => {
    const reviews = useSelector((state) => state.reviews);
    const filters = useSelector((state) => state.filters);
    const sorting = useSelector((state) => state.sorting);

    const filteredReviews = reviews.filter((review) => {
        const matchesPlatform =
            !filters.platform || review.platform === filters.platform;
        const matchesRating =
            review.rating >= filters.ratingRange[0] &&
            review.rating <= filters.ratingRange[1];
        return matchesPlatform && matchesRating;
    });

    const sortedReviews = [...filteredReviews].sort((a, b) => {
        if (!sorting || !sorting.field || !sorting.order) {
            return 0;
        }
        if (sorting.field === 'date') {
            return sorting.order === 'asc'
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date);
        }
        if (sorting.field === 'rating') {
            return sorting.order === 'asc' ? a.rating - b.rating : b.rating - a.rating;
        }
        return 0;
    });

    return (
        <div className="reviews-table-container">
            <table className="reviews-table">
                <thead>
                <tr>
                    <th>Платформа</th>
                    <th>Рейтинг</th>
                    <th>Дата</th>
                    <th>Текст отзыва</th>
                </tr>
                </thead>
                <tbody>
                {sortedReviews.map((review) => (
                    <tr key={review.id}>
                        <td>{review.platform}</td>
                        <td>{review.rating}</td>
                        <td>{new Date(review.date).toLocaleString()}</td>
                        <td>{review.text}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReviewsTable;
