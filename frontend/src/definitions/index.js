import uuid from '../util/UUID'

class Category {
    constructor(name, path) {
        this.name = name
        this.path = path
    }
}

class Comment {
    id = uuid()
    timestamp = Date.now()
    body = ""
    author = ""
    parentId = ""
    deleted = false

    constructor(body, author, parentId) {
        this.body = body
        this.author = author
        this.parentId = parentId
    }
}

export {Category, Comment}
