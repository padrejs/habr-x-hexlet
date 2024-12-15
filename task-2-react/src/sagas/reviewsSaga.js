import { takeEvery, put } from 'redux-saga/effects';

function* loadReviews() {
    const mockReviews = [
        {
            id: 1,
            platform: 'Google',
            rating: 4,
            date: '2023-11-15T10:00:00Z',
            text: 'Отличный сервис!',
        },
        {
            id: 2,
            platform: 'Яндекс',
            rating: 3,
            date: '2023-11-14T09:00:00Z',
            text: 'Хорошо, но есть недочеты.',
        },
        {
            id: 3,
            platform: '2ГИС',
            rating: 5,
            date: '2023-11-13T08:00:00Z',
            text: 'Прекрасно!',
        },
    ];
    yield put({ type: 'SET_REVIEWS', payload: mockReviews });
}

export default function* reviewsSaga() {
    yield takeEvery('LOAD_REVIEWS', loadReviews);
}
