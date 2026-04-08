import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookProvider';

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();
    const { handleMarkAsRead, handleWishList } = useContext(BookContext);

    const expectedBook = Array.isArray(books)
        ? books.find(book => book.bookId === parseInt(id))
        : null;

    if (!expectedBook) {
        return (
            <div className="w-9/12 mx-auto my-10 text-center">
                <h2 className="text-xl font-bold">Book not found</h2>
            </div>
        );
    }





    return (
        <div className="w-9/12 mx-auto my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f7f7f7] p-4 rounded-xl">
                <div className="bg-[#eeeeee] rounded-xl flex items-center justify-center p-5">
                    <img
                        src={expectedBook.image}
                        alt={expectedBook.bookName}
                        className="max-h-[320px] object-contain"
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-[#131313]">
                        {expectedBook.bookName}
                    </h1>

                    <p className="mt-2 text-base text-gray-600 font-medium">
                        By : {expectedBook.author}
                    </p>

                    <div className="border-t border-gray-300 my-3"></div>

                    <p className="text-base text-gray-700">
                        {expectedBook.category}
                    </p>

                    <div className="border-t border-gray-300 my-3"></div>

                    <p className="text-sm text-gray-600 leading-6">
                        <span className="font-bold text-[#131313]">Review : </span>
                        {expectedBook.review}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="font-bold text-[#131313] text-sm">Tag</span>
                        {expectedBook.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="border-t border-gray-300 my-4"></div>

                    <div className="space-y-2 text-sm text-gray-700">
                        <p>
                            <span className="inline-block w-32">Number of Pages:</span>
                            <span className="font-semibold text-[#131313]">{expectedBook.totalPages}</span>
                        </p>
                        <p>
                            <span className="inline-block w-32">Publisher:</span>
                            <span className="font-semibold text-[#131313]">{expectedBook.publisher}</span>
                        </p>
                        <p>
                            <span className="inline-block w-32">Year of Publishing:</span>
                            <span className="font-semibold text-[#131313]">{expectedBook.yearOfPublishing}</span>
                        </p>
                        <p>
                            <span className="inline-block w-32">Rating:</span>
                            <span className="font-semibold text-[#131313]">{expectedBook.rating}</span>
                        </p>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <button onClick={() => handleMarkAsRead(expectedBook)} className="btn btn-sm bg-white text-[#131313] border border-gray-400 shadow-none hover:bg-gray-100">
                            Mark as Read
                        </button>
                        <button onClick={() => handleWishList(expectedBook)} className="btn btn-sm bg-cyan-400 text-white border-none hover:bg-cyan-500">
                            Add To  Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;