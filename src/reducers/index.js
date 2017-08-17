import { combineReducers } from 'redux'
import posts from './postReducer'
import categories from './categoryReducer'

const rootReducer = combineReducers({
    posts,
    categories
})

export default rootReducer