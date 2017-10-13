import {SetCategories} from '../actions/categoryActions'

export default function categories(state = {}, action = {categories: {}}) {
    switch (action.type) {
        case SetCategories:
            const categories = {}
            action.categories.forEach(category => categories[category.path] = category)
            return categories
        default:
            return state
    }
}
