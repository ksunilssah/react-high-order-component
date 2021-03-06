import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions/index';
import requireAuth from 'containers/requireAuth';
import 'containers/comment.css';

class CommentBox extends Component {
    state = {
        comment: ''
    };



    handleChange = event => {
        this.setState({
            comment: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.comment !== '') {
            this.props.saveComment(this.state.comment);
        }
        this.setState({
            comment: ''
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button type="submit">Submit Comment</button>

                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch comment list</button>
            </div>

        );
    }
}


export default connect(null, { saveComment, fetchComments })(requireAuth(CommentBox));
