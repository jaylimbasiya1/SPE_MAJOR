import Header from './Header';
import React from 'react';
import { signup, isAuth, preSignup } from '../actions/auth';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            {children}
            
        </React.Fragment>
    );
};

export default Layout;
