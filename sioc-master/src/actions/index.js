export const SAVE_PARTIAL_DWELLING = 'SAVE_PARTIAL_DWELLING';

export function savePartialDwelling(dwelling) {
    return {type: SAVE_PARTIAL_DWELLING, dwelling};
}

export const DWELLING_SAVE_REQUESTED = 'DWELLING_SAVE_REQUESTED ';
export const DWELLING_SAVE_SUCCEEDED = 'DWELLING_SAVE_SUCCEEDED ';

export function requestSaveDwelling(dwelling) {
    return {type: DWELLING_SAVE_REQUESTED, dwelling};
}
export function notifyDwellingSavedSuccessfully() {
    return {type: DWELLING_SAVE_SUCCEEDED};
}


export const DWELLINGS_FETCH_REQUESTED = 'DWELLINGS_FETCH_REQUESTED';
export const DWELLINGS_FETCH_SUCCEEDED = 'APPS_FETCH_SUCCEEDED';

export function requestDwellings() {
    return {type: DWELLINGS_FETCH_REQUESTED};
}

export function receiveDwellings(dwellings) {
    return {type: DWELLINGS_FETCH_SUCCEEDED, dwellings};
}

export const SELECT_USER = 'SELECT_USER';

export function selectUser(user) {
    return {type: SELECT_USER, user};
}
