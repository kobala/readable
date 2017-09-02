import * as readableApi from '../utils/readableAPI'
import * as types from './actionTypes'
import { beginAjaxCall } from './ajaxStatusActions'

export function loadCategoriesSuccess (categories) {
    return { type: types.LOAD_CATEGORIES_SUCCESS, categories }
}

export function loadCategories () {
    return dispatch => {
        dispatch(beginAjaxCall())

        return readableApi.getAllCategories().then(categories => {
            dispatch(loadCategoriesSuccess(categories))
        }).catch(error => {
            throw (error)
        })
    }
}