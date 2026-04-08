// src/Pages/ErrorPage/ErrorPage.jsx
import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-5xl font-bold text-red-600">404</h1>
            <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>
            <p className="mt-2 text-gray-600">
                Sorry, the page you are looking for does not exist.
            </p>

            <Link
                to="/"
                className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg"
            >
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;