import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark; 
        return (
            <div className='book-list' style={{ color: theme.syntax, background: theme.bg}}>
                <ul>
                    <li style={{ background: theme.ui }}>The Lord of The Ring</li>
                    <li style={{ background: theme.ui }}>King's Fall</li>
                    <li style={{ background: theme.ui }}>Adventure Time</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;