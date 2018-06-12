import commentReducer from 'reducers/comment';

it('handles actions of type SAVE_COMMENT', () => {

    const action = {
        type: 'SAVE_COMMENT',
        payload: 'New Comment'
    };

    const newState = commentReducer([], action);
    expect(newState).toEqual(['New Comment']);
    
});