import React from 'react';
import {Link} from 'react-router';

const Main = React.createClass({
    render() {
        // console.log(this.props.posts);
        return (
            <div>
                <h1>
                    <Link to="/">Reduxtragam</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
});

export default Main;