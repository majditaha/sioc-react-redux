import {takeEvery} from 'redux-saga';
import {
    DWELLING_SAVE_REQUESTED,
    DWELLINGS_FETCH_REQUESTED
} from '../actions';
import {saveDwelling, fetchDwellings} from './dwelling';

export default function* root() {
    yield [
        takeEvery(DWELLING_SAVE_REQUESTED, saveDwelling),
        takeEvery(DWELLINGS_FETCH_REQUESTED, fetchDwellings)
    ];
}
