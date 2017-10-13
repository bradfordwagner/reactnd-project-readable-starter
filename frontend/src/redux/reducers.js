import {combineReducers} from 'redux'
import categories from './reducers/categoryReducer'

function test(state = {}, action = {}) {
    switch (action.type) {
        default:
            return state
    }
}

export default combineReducers({test, categories})
