import {combineReducers} from 'redux'
import categories from './reducers/categories'
import posts from './reducers/posts'

function test(state = {}, action = {}) {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({test, categories, posts})
