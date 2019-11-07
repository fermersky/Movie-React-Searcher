import React from 'react';
import './Header.css';
import Logo from './../Logo/Logo';

const Header = props => {
    return (
        <header className="header">
            <div className="container">
                <div className="row" style={{ display: 'flex', alignItems: 'center' }}>
                    <Logo styles={{ margin: '5px auto' }} />
                </div>
            </div>
        </header>
    );
};

export default Header;
