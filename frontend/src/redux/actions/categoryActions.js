export const SetCategories = "ADD_CATEGORIES"

export function setCategories(categories) {
    return {
        type: SetCategories,
        categories
    }
}