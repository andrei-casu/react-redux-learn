//a reducers takes in the action and a copy of the state

function posts(state = [], action) {
    // console.log(state, action);
    const newState = Object.assign([], state);
    // console.log(newState);
    
    switch(action.type){
        case 'INCREMENT_LIKES':
            newState.map((post) => {
                if (post.id === action.id) 
                    post.likes++;    
            });
            
        default:
            return newState;
    }
    return state;
}

export default posts;

