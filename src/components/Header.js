import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <Header>
            <h1>Book Management App</h1>
            <hr />
            <div className='links'>
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Books List
                </NavLink>
                <NavLink tp="/add" className="link" activeClassName="active">
                    Add book
                </NavLink>
            </div>
        </Header>
    );
};

export default Header;