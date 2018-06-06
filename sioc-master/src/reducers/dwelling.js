import {
    DWELLINGS_FETCH_SUCCEEDED,
    SAVE_PARTIAL_DWELLING
} from '../actions';

export default function dwelling(state = {}, action) {
    switch (action.type) {
        case DWELLINGS_FETCH_SUCCEEDED:
            return {...state, dwellings: action.dwellings};
        case SAVE_PARTIAL_DWELLING:
            return {...state, dwelling: action.dwelling};
        default:
            return state;
    }
}
