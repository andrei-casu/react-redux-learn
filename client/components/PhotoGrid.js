import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
    render() {
        const {posts, comments, increment} = this.props;
        return (
            <div className="photo-grid">
                {posts.map((post, i) => 
                    <Photo key={'photo'+i} post={post} comments={comments[post.code] || []} increment={increment} />
                )}
            </div>
        );
    }
});

export default PhotoGrid;