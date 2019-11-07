import React from 'react';
import './Logo.css';

const Logo = ({ styles }) => {
    return (
        <a style={styles} href="/" className="logo">
            <h1>MS</h1>
        </a>
    );
};

export default Logo;
