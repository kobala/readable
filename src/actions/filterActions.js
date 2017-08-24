import * as types from './actionTypes'

export function setPostsSortingSuccess(sortBy) {
    return { type: types.SET_POSTS_SORTING_SUCCESS, sortBy }
}

export function setPostsKeywordSuccess(keyword) {
    return { type: types.SET_POSTS_KEYWORD_SUCCESS, keyword }
}

export function setSorting (sortBy) {
    return dispatch => {
        dispatch(setPostsSortingSuccess(sortBy))
    }
}

export function setKeyword (keyword) {
    return dispatch => {
        dispatch(setPostsKeywordSuccess(keyword))
    }
}