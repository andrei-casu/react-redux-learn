function comments(state = [], action) {
    // console.log(state, action);
    const newState = Object.assign([], state);
    // console.log(newState);
    
    switch(action.type){
        case 'ADD_COMMENT':
            const object = {
                text: action.comment,
                user: action.author
            };
            if (newState[action.postId]){
                newState[action.postId].push(object);
            }
            else {
                newState[action.postId] = [object];
            }
            return newState;
        case 'REMOVE_COMMENT':
            newState[action.postId].splice(action.index, 1);
            return newState;
        default:
            return newState;
    }
    return state;
}

export default comments;