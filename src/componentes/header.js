import React from 'react';
import './header.css';

export default ({black}) => {
    return (
        <header className = {black ? 'black' : ''}>
            <div className="header--logo">
                <a href = "/">
                    <img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt = 'netflix'/>
                </a>
            </div>
            <div className="header--user">
                <a href = "/">
                    <img src ='https://i.pinimg.com/564x/c3/53/7f/c3537f7ba5a6d09a4621a77046ca926d--soccer-quotes-lineman.jpg' alt='User'/>
                </a>
            </div>
        </header>
    )
}