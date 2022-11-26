import { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';
import BookDetails from '../components/BookDetails'


/* Class Component 寫法
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
*/

/* React Hook 寫法 */

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark; 
    return books.length ? ( 
        <div className='book-list' style={{ color: theme.syntax, background: theme.bg}}>
            <ul>
                {books.map( (book) => {
                    return (
                        <BookDetails book={ book } key={ book.id } />
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className='empty'> Well Done!! You have finished.</div>
    );
}

export default BookList;