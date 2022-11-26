import { createContext, /*useState*/ useReducer, useEffect } from 'react'
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
    ], () => {//使用useReducer 第三個參數 initialAction 使之回傳原本的books陣列
        const localData = localStorage.getItem('books'); //從localStorage 取回存取過的books/JSON
        return localData ? JSON.parse(localData) : []   //只取回localData, 沒有則回傳空陣列
    }); 
    
    useEffect(() => {//(只要reRender 就會執行)只要books有被改變, 就執行將books 轉換成JSON存到LocalStorage內
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    
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

