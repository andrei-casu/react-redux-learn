import React from 'react';
import {Link} from 'react-router';

const Photo = React.createClass({
    render(){
        const {post, comments, increment} = this.props;
        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo"/>
                    </Link>
                </div>
                <figcaption>
                    <p>{post.caption}</p>
                </figcaption>

                <div className="control-buttons">
                    <button onClick={increment.bind(null, post.id)} className="likes">&hearts; {post.likes}</button>
                    <span className="comment-count button">
                        <span className="speech-bubble"></span>
                        {comments.length}
                    </span>
                </div>
            </figure>
        );
    }
});

export default Photo;