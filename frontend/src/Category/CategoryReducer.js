
import {SetCategories} from "../App/ActionTypes";

export default function categories(state = {names: [], paths: []}, action = {categories: {}}) {
    switch (action.type) {
        case SetCategories:
            const names = []
            const paths = []
            action.categories.forEach(category => {
                names.push(category.name)
                paths.push(category.path)
            })
            return {...state, names, paths}
        default:
            return state
    }
}
