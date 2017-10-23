export const AddComments = "ADD_COMMENTS"
export const UpdateComment = "UPDATE_COMMENT"

export const addComments = (comments = []) => {
    return {type: AddComments, comments}
}

export const updateComment = (comment = {}) => {
    return {type: UpdateComment, comment}
}
