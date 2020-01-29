import React from 'react';
import styles from './header.module.css';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.linkItems}>
                <NavLink to='/'>
                    Список событий
                </NavLink>
                <NavLink to='/favorites'>
                    Избранное
                </NavLink>
            </div>
            
        </header>
    );
};

export default Header;