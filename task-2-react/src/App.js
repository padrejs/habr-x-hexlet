import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import ReviewsTable from './components/ReviewsTable';
import Filters from './components/Filters';
import Sorting from './components/Sorting';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'LOAD_REVIEWS'});
    }, [dispatch]);

    return (
        <div className="container">
            <h1>Отзывы</h1>
            <div className="container-select">
                <Filters/>
                <Sorting/>
            </div>
            <ReviewsTable/>
        </div>
    );
}

export default App;

