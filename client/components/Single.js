import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

function getPostWithId(posts, code){
    let i;
    for (i = 0; i < posts.length; ++i)
        if (posts[i].code === code)
            return posts[i];
    return null;
}

const Single = React.createClass({
    render() {
        const {posts, comments, increment, addComment, removeComment} = this.props;
        const {postId} = this.props.params
        const post = getPostWithId(posts, postId);
        const commentsEdited = comments[post.code] || [];
        // console.log(post);
        return (
            <div className="single-photo">
                <Photo post={post} comments={commentsEdited} increment={increment}/>
                <Comments comments={commentsEdited} postId={postId} actions={{addComment, removeComment}}/>
            </div>
        );
    }
});

export default Single;