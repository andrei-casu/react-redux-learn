//increment
export function increment(id) {
    return {
        type: 'INCREMENT_LIKES',
        id
    };
}

//add comment
export function addComment(postId, author, comment) {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    };
}

//remove comment
export function removeComment(postId, index) {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        index
    }
}