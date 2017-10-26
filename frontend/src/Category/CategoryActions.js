import API from '../api/index'
import {SetCategories} from "../App/ActionTypes";

const setCategories = (categories) => {
    return {
        type: SetCategories,
        categories
    }
}

export const loadCategories = () => dispatch => API.getAllCategories().then(categories => dispatch(setCategories(categories)))
