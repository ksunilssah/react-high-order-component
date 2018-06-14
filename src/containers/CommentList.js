import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
    renderCommentList() {
        return (
            this.props.comments.map((item, index) => {
                return <li key={index}>{item}</li>;
            })
        )
    }

    render() {
        return (
            <div className="comment-list">
                <h4>Comment List</h4>
                <ul>
                    {this.renderCommentList()}
                </ul>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);