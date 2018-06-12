import React, { Component } from 'react';
import CommentBox from 'containers/CommentBox';
import CommentList from 'containers/CommentList';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <CommentBox />
        <CommentList />
      </div>
    )
  }
}