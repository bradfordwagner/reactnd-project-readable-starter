import {CategoryActions} from '../actions'

const initialCategoryState = {}

export function categoryReducer(state = initialCategoryState, action = {categories: {}}) {
    switch (action.type) {
        case CategoryActions.SetCategories:
            const categories = {}
            action.categories.forEach(category => categories[category.path] = category)
            state = {
                ...state,
                categories
            }
            return state
        default:
            return state
    }
}