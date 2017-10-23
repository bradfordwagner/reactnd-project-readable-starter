const apiUrl = "http://localhost:3001"

const token = "this can be anything ;)"

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const getAllCategories = () => fetch(`${apiUrl}/categories`, {headers})
    .then(res => res.json())
    .then(res => res.categories)

export const getAllPosts = () => fetch(`${apiUrl}/posts`, {headers})
    .then(res => res.json())

export const UP_VOTE = "upVote"
export const DOWN_VOTE = "downVote"

export const voteOnPost = (post, vote) => fetch(`${apiUrl}/posts/${post.id}`, {
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        option: vote
    }),
    method: 'POST'
}).then(res => res.json())


export const deletePost = (post) => fetch(`${apiUrl}/posts/${post.id}`, {headers, method: 'DELETE'}).then(res => res.json())

export const savePost = (post) => fetch(`${apiUrl}/posts`, {
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(post)
})
    .then(res => res.json())

export const updatePost = (post) => fetch(`${apiUrl}/posts/${post.id}`, {
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({title: post.title, body: post.body})
}).then(res => res.json())

export const getPostsForCategory = (categoryName) => fetch(`${apiUrl}/${categoryName}/posts`, {headers}).then(res => res.json())

export const getCommentsForPost = (post) => fetch(`${apiUrl}/posts/${post.id}/comments`, {headers})
    .then(res => res.json())

export const getPost = postId => fetch(`${apiUrl}/posts/${postId}`, {headers}).then(res => res.json())

export const addComment = (comment) => fetch(`${apiUrl}/comments`, {
    headers: {...headers, 'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({...comment, timestamp: Date.now()})
}).then(res => res.json())

export const getComment = (commentId) => fetch(`${apiUrl}/comments/${commentId}`, {headers}).then(res => res.json())
export const editComment = (comment) => fetch(`${apiUrl}/comments/${comment.id}`, {
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify({timestamp: Date.now(), body: comment.body})
}).then(res => res.json())
export const voteOnComment = (comment, vote) => fetch(`${apiUrl}/comments/${comment.id}`, {
    headers: {
        ...headers,
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({option: vote})
}).then(res => res.json())
export const deleteComment = (comment) => fetch(`${apiUrl}/comments/${comment.id}`, {
    headers: {
        ...headers
    },
    method: 'DELETE'
}).then(res => res.json())

export default {
    getAllCategories,
    getAllPosts,
    voteOnPost,
    deletePost,
    savePost,
    updatePost,
    getPostsForCategory,
    getPost,
    getCommentsForPost,
    addComment,
    getComment,
    editComment,
    voteOnComment,
    deleteComment
}
