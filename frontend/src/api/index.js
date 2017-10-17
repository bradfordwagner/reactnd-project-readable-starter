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
