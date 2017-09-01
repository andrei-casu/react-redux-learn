import React from 'react';

const Comments = React.createClass({
    handleSubmitComment(event){
        const {addComment} = this.props.actions;
        const {postId} = this.props;
        // console.log(this.refs);
        const {author, comment} = this.refs;
        event.preventDefault();
        addComment(postId, author.value, comment.value);
    },
    renderComment(comment, index) {
        const {removeComment} = this.props.actions;
        const {postId} = this.props;
        return (
            <div className="comment" key={`comm${index}`}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-content" onClick={removeComment.bind(null, postId, index)}>&times;</button>
                </p>
            </div>
        );
    },

    render(){
        const {comments, onSubmit} = this.props;
        return (
            <div>
                {comments.map((comment, index) => this.renderComment(comment, index)) }
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmitComment}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
});

export default Comments;