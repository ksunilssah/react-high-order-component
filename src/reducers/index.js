import { combineReducers } from 'redux';
import commentReducer from 'reducers/comment';

const rootReducer = combineReducers({
    comments: commentReducer
})

export default rootReducer;