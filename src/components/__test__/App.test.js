import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import ComentBox from 'containers/CommentBox';
import CommentList from 'containers/CommentList';

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
});

it('Shows a Commnet Box', () => {
    expect(wrapped.find(ComentBox).length).toEqual(1);
});

it('Shows a Comment List', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})