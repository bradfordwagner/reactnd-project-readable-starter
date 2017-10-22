import {combineReducers} from 'redux'
import categories from './reducers/CategoryReducer'
import posts from './reducers/PostReducer'

export default combineReducers({categories, posts})
