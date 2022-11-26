import { useState } from "react";

const NewBookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); //防止Submit時更新頁面
    addBook(title); //跟BookList裡的addBook()連結
    setTitle(""); //案新增歌曲按鈕時自動清空text area
  };
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label>Book Name : </label>
      <input
        className="bookText"
        placeholder="Enter Book Name"
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input className="submitBtn" type="submit" value="Add Book" />
    </form>
  ); 
};

export default NewBookForm;
