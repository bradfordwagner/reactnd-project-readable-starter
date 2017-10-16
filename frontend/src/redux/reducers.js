import {combineReducers} from 'redux'
import categories from './reducers/CategoryReducer'
import posts from './reducers/PostReducer'

function test(state = {}, action = {}) {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({test, categories, posts})
