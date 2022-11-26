import { useState } from 'react'

const NewBookForm = ({addBook}) => {
    const [ title, setTitle ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();//防止Submit時更新頁面
        addBook(title);//跟BookList裡的addBook()連結
        setTitle('');//案新增歌曲按鈕時自動清空text area
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Book Name :</label>
            <input type='text' value={title} required onChange={(e) => setTitle(e.target.value)} />
            <input type='submit' value='Add Book List' />
        </form>
    );
}

export default NewBookForm;