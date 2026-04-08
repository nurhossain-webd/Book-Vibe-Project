import React from 'react';
import { Link } from 'react-router';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";

const ListedWishList = ({ books }) => {

    if (books.length === 0) {
        return (
            <div className="w-11/12 mx-auto my-12">
                <div className="max-w-xl mx-auto rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
                    <div className="flex justify-center mb-4">
                        <div className="bg-cyan-50 p-4 rounded-full">
                            <IoBookOutline className="text-4xl text-cyan-500" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">No wishlist books yet</h2>
                    <p className="mt-2 text-gray-500">
                        Your wishlist is empty. Add books to your wishlist to see them here.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto my-8 space-y-6">
            {books.map((book) => (
                <div
                    key={book.bookId}
                    className="border border-gray-300 rounded-2xl p-5 flex flex-col md:flex-row gap-6 bg-white"
                >
                    <div className="bg-[#f3f3f3] rounded-2xl p-6 flex items-center justify-center md:w-[180px] md:h-[220px]">
                        <img
                            src={book.image}
                            alt={book.bookName}
                            className="h-[170px] object-contain"
                        />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-[#131313]">
                            {book.bookName}
                        </h2>

                        <p className="mt-3 text-base font-medium text-gray-700">
                            By : {book.author}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                            <span className="font-bold text-[#131313]">Tag</span>
                            {book.tags?.map((tag, index) => (
                                <span
                                    key={index}
                                    className="rounded-full bg-green-100 px-3 py-1 text-green-600 font-medium"
                                >
                                    #{tag}
                                </span>
                            ))}

                            <div className="flex items-center gap-1 text-gray-600">
                                <CiLocationOn size={18} />
                                <span>Year of Publishing: {book.yearOfPublishing}</span>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <HiOutlineUsers size={18} />
                                <span>Publisher: {book.publisher}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <IoDocumentTextOutline size={18} />
                                <span>Page {book.totalPages}</span>
                            </div>
                        </div>

                        <div className="border-t border-dashed border-gray-300 my-4"></div>

                        <div className="flex flex-wrap items-center gap-4">
                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-500">
                                Category: {book.category}
                            </span>

                            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm text-amber-500">
                                Rating: {book.rating}
                            </span>

                            <Link to={`/bookDetails/${book.bookId}`}>
                                <button className="btn btn-sm bg-green-500 text-white border-none rounded-full hover:bg-green-600">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListedWishList;