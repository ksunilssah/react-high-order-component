import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from 'containers/Header';
import CommentBox from 'containers/CommentBox';
import CommentList from 'containers/CommentList';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    )
  }
}