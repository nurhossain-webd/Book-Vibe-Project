import React, { use } from 'react';
import BookCard from '../../UI/BookCard';

const bookPromise = fetch("/booksData.json")
    .then(res => res.json());

const AllBooks = () => {
    const books = use(bookPromise);

    return (
        <>
            <h2 className='font-bold text-3xl text-center my-6'>Books</h2>
            <div className="my-10 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {books.map((book, index) => {
                    return <BookCard key={index} book={book} />
                })}
            </div>
        </>

    );
};

export default AllBooks;