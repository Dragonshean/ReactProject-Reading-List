import { createContext, /*useState*/ useReducer } from 'react'
// import { v1 } from 'uuid';
import NewBookForm from '../components/NewBookForm';
import { bookReducer } from '../Reducers/bookReducer';


export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [ books, dispatch ] = useReducer(bookReducer, [
        // {title: "King's Fall", id: 1 },
        // {title: "King Rises", id: 2 },
        // {title: 'King Fall again', id: 3 },
        // {title: 'King is stupid', id: 4 }
    ]); 
    
    return ( 
        <BookContext.Provider value = {{books, dispatch}}>
            {props.children}
            <NewBookForm dispatch={dispatch}/>
        </BookContext.Provider>
    );

    /* useState 範本
    const [ books, setBooks ] = useState([
        {title: "King's Fall", id: 1 },
        {title: "King Rises", id: 2 },
        {title: 'King Fall again', id: 3 },
        {title: 'King is stupid', id: 4 }
    ]);
    const addBooks = (title) => {
        setBooks([...books, { title, id: v1() }]);
    }
    const removeBooks = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }

    return ( 
        <BookContext.Provider value = {{books, addBooks, removeBooks}}>
            {props.children}
            <NewBookForm addBook={addBooks}/>
        </BookContext.Provider>
    );*/
}

export default BookContextProvider;

