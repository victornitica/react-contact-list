import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div className="header">
            <h3><i class="fas fa-address-book"></i>{' '}MyContactList</h3>
            <Link to="/">Home</Link> | <Link to="/info">About</Link>
        </div>
    )
}
