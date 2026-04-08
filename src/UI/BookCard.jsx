import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`}
            key={book.bookId}
            className="rounded-2xl border border-gray-300 bg-[#f7f7f7] p-4 max-w-[280px] mx-auto w-full flex flex-col"
        >
            <div className="rounded-2xl bg-[#eeeeee] p-6 flex items-center justify-center h-[150px]">
                <img
                    src={book.image}
                    alt={book.bookName}
                    className="h-[130px]  object-contain"
                />
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
                {book.tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <h2 className="mt-2 text-xl font-bold text-[#131313] leading-snug min-h-[56px]">
                {book.bookName}
            </h2>

            <p className="mt-2 text-base font-semibold text-gray-600 min-h-[28px]">
                By : {book.author}
            </p>

            <div className="mt-auto">
                <div className="my-4 border-t border-dashed border-gray-300"></div>

                <div className="flex items-center justify-between text-base text-gray-700">
                    <p>{book.category}</p>

                    <div className="flex items-center gap-2">
                        <span>{book.rating}</span>
                        <span className="text-lg text-gray-600">☆</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;