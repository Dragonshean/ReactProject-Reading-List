import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';

/* Class Component 寫法

import React, { Component } from 'react';
class Navbar extends Component {
    render() { 
        return (
            <AuthContext.Consumer>
            {(authContext) => (
                <ThemeContext.Consumer>
                    {(themeContext)=>{
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                    <nav style={{ background: theme.ui, color: theme.syntax }}>
                        <h1>Context App</h1>
                        <div onClick={toggleAuth}>
                            { isAuthenticated ? 'Logged in' : 'Logged out'}
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                    )}}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        );
    }
}

export default Navbar;
*/


/* React Hook 寫法 */

const Navbar = () => {
    const { books } = useContext(BookContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Dra Shean Reading List</h1>
            <p> Currently you have { books.length } books to finish</p>
            <div style={{cursor: 'pointer'}} onClick={toggleAuth}>
                { isAuthenticated ? 'No Touching Man!!' : 'Click Here'}
            </div>
            <ul>
                <li>Relax~~</li>
                <li>Immerse~~</li>
                <li>Imagination~~</li>
            </ul>
        </nav>
    );
}

export default Navbar;
