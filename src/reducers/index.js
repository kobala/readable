import { combineReducers } from 'redux'
import posts from './postReducer'
import categories from './categoryReducer'
import filter from './filterReducer'
import postComments from './commentReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
    posts,
    categories,
    filter,
    postComments,
    ajaxCallsInProgress
})

export default rootReducer