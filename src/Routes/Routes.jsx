import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import Books from "../Pages/Books/Books";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PagesToRead from "../Pages/PagesToRead";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: "/books",
                Component: Books
            },
            {
                path: "/page-to-read",
                Component: PagesToRead
            },
            {
                path: "/bookDetails/:id",
                Component: BookDetails,
                loader: () => fetch("/booksData.json")
            },
        ],
        errorElement: <ErrorPage />
    },
]);