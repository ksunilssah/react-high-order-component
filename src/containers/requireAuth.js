import React, { Component } from 'react';
import { connect } from 'react-redux';

//HOC example
export default (ChildComponent) => {
    class ComposedComponent extends Component {
        //Fired when component just got rendered
        componentDidMount() {
            this.isLoggedIn();
        }
        //Our component just got updated got new props
        componentDidUpdate() {
            this.isLoggedIn();
        }

        isLoggedIn() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }
        render() {
            return <ChildComponent {...this.props} />;
        }
    }
    const mapStateToProp = (state) => {
        return {
            auth: state.auth
        }
    }
    return connect(mapStateToProp)(ComposedComponent);
}