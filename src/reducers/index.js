import { combineReducers } from 'redux';
import commentReducer from 'reducers/comment';
import authReducer from 'reducers/auth';

const rootReducer = combineReducers({
    comments: commentReducer,
    auth: authReducer
})

export default rootReducer;