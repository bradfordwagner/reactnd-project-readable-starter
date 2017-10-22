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

export default {getAllCategories, getAllPosts, voteOnPost, deletePost, savePost, updatePost, getPostsForCategory}
