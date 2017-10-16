import {SetCategories} from '../actions/CategoryActions'

export default function categories(state = {byId: {}}, action = {categories: {}}) {
    switch (action.type) {
        case SetCategories:
            const byId = {}
            action.categories.forEach(category => byId[category.path] = category)
            return {...state, byId}
        default:
            return state
    }
}
