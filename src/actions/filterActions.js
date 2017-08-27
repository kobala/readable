import * as types from './actionTypes'

export function setFilterSortingSuccess(sortBy) {
    return { type: types.SET_SORTING_SUCCESS, sortBy }
}

export function setFilterKeywordSuccess(keyword) {
    return { type: types.SET_KEYWORD_SUCCESS, keyword }
}

export function setFilterSorting (sortBy) {
    return dispatch => {
        dispatch(setFilterSortingSuccess(sortBy))
    }
}

export function setFilterKeyword (keyword) {
    return dispatch => {
        dispatch(setFilterKeywordSuccess(keyword))
    }
}