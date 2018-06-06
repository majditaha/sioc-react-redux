import {call, put} from 'redux-saga/effects';
import {
    receiveDwellings,
    notifyDwellingSavedSuccessfully
} from '../actions';
import DwellingService from '../services/dwelling';


export function* saveDwelling({dwelling}) {
    yield call(DwellingService.save, dwelling);
    yield put(notifyDwellingSavedSuccessfully());
}

export function* fetchDwellings() {
    const dwellings = yield call(DwellingService.fetch);
    yield put(receiveDwellings(dwellings));
}
