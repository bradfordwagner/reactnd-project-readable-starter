export const SetCategories = "ADD_CATEGORIES"

export const setCategories = (categories) => {
    return {
        type: SetCategories,
        categories
    }
}
