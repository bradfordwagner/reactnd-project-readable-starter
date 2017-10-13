import {setCategories} from './categoryActions'

export default function(dispatch) {
    return {
        setCategories: (categories) => dispatch(setCategories(categories))
    }
}
