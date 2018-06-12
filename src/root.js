import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import rootReducer from 'reducers/index';

//const initialState = {};
//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


export default ({ children, initialState = {} }) => {

    const store = createStore(rootReducer, initialState, applyMiddleware(promise));

    return (
        // <Provider store={createStoreWithMiddleware(rootReducer, initialState)}> 
        <Provider store={store}>
            {children}
        </Provider>
    );
};