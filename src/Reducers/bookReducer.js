import { v1 } from 'uuid';

//action 只能透過 dispatch 來調用，dispatch 會將 action 傳給 reducer。

export const bookReducer = (state, action) => { //state = books, action = 更新state的方式
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                id: v1()
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state;
    }
}