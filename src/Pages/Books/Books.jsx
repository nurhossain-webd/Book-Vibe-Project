import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishList from '../../Components/ListedBooks/ListedWishList';

const Books = () => {
    const { wishList, storeBooks } = useContext(BookContext);
    const [sortingType, setSortingType] = useState("");

    const getSortedBooks = (books) => {
        const copiedBooks = [...books];

        if (sortingType === "Pages") {
            copiedBooks.sort((a, b) => b.totalPages - a.totalPages);
        }
        else if (sortingType === "Rating") {
            copiedBooks.sort((a, b) => b.rating - a.rating);
        }

        return copiedBooks;
    };

    const sortedReadBooks = getSortedBooks(storeBooks);
    const sortedWishBooks = getSortedBooks(wishList);

    return (
        <div>
            <Tabs>
                <TabList className="flex justify-between">
                    <div>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️</div>
                        <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => setSortingType("Pages")}>Pages</a></li>
                            <li><a onClick={() => setSortingType("Rating")}>Rating</a></li>
                            <li><a onClick={() => setSortingType("")}>Default</a></li>
                        </ul>
                    </div>
                </TabList>

                <TabPanel>
                    <ListedReadList books={sortedReadBooks} />
                </TabPanel>
                <TabPanel>
                    <ListedWishList books={sortedWishBooks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;