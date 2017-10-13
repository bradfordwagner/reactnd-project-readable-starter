import {combineReducers} from 'redux'
import {categoryReducer} from './reducers/categoryReducer'

function testReducer(state = {}, action = {}) {
    switch (action.type) {
        default:
            return state
    }
}



export default combineReducers({testReducer, categoryReducer})