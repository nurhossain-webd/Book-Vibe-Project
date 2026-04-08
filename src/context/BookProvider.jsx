import React, { Children, createContext, useState } from 'react';
import { PiAlarmThin } from 'react-icons/pi';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storeBooks, setStoreBooks] = useState([]);
    const [wishList, setWishList] = useState([]);

    const handleWishList = (currentBook) => {
        const isExistInStoreBooks = storeBooks.find(book => book.bookId == currentBook.bookId)
        if (isExistInStoreBooks) {
            toast.warning("The book is already in your read list")
            return
        }
        const isExistBook = wishList.find(book => book.bookId == currentBook.bookId);
        if (isExistBook) {
            toast.warning("The book is already exist")
        }
        else {
            setWishList([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
    }
    const handleMarkAsRead = (currentBook) => {
        const isExistBook = storeBooks.find((book) => book.bookId == currentBook.bookId);
        if (isExistBook) {
            toast.warning("The book is already exist")
        }
        else {
            setStoreBooks([...storeBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to list`)
        }

    }
    const data = {
        storeBooks,
        setStoreBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList

    }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;