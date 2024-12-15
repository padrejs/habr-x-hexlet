const initialState = {
    reviews: [],
    filters: {
        platform: '',
        ratingRange: [0, 5],
    },
    sorting: {
        field: 'date',
        order: 'desc',
    },
};

export default function reviewsReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_REVIEWS':
            return {...state, reviews: action.payload};
        case 'SET_FILTERS':
            return {...state, filters: action.payload};
        case 'SET_SORT':
            return {...state, sort: action.payload};
        case 'SET_PLATFORM_FILTER':
            return {...state, filters: {...state.filters, platform: action.payload}};
        case 'SET_RATING_FILTER':
            return {...state, filters: {...state.filters, ratingRange: action.payload}};
        case 'SET_SORTING':
            return {...state, sorting: action.payload};
        default:
            return state;
    }
}
