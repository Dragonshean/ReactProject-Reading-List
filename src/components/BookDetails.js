import { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext';


const BookDetails = ({book}) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark; 
    // const { removeBooks } = useContext(BookContext);
    const { dispatch } = useContext(BookContext);
    return ( 
        <li onClick={() => dispatch ({type: 'REMOVE_BOOK', id: book.id})/*removeBooks(book.id)*/}>
            <div className='title' style={{ background: theme.ui }}>{ book.title }</div>
        </li>
    );
}
 
export default BookDetails;