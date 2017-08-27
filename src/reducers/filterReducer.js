import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function filterReducer (state = initialState.filter, action) {
    switch(action.type){
        case types.SET_SORTING_SUCCESS :
            return {
                ...state,
                sorting: action.sortBy
            }
        case types.SET_KEYWORD_SUCCESS :
            return {
                ...state,
                keyword: action.keyword
            }
        default :
            return state
    }
}