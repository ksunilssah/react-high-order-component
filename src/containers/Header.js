import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeAuth } from 'actions/index';
import 'containers/header.css';

class Header extends Component {

    renderButton() {
        if (this.props.auth) {
           return <button onClick={()=> this.props.changeAuth(false)}> Sign Out </button>;
        } else {
            return <button onClick={()=>this.props.changeAuth(true)}>Sign In</button>;
        }
    }
    render() {
        return (
            <header>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/post">Post</Link></li>
                    <li>{this.renderButton()}</li>
                </ul>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {changeAuth})(Header);