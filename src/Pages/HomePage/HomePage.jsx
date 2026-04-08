import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Books from '../Books/Books';
import AllBooks from './AllBooks';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <AllBooks />
        </div>
    );
};

export default HomePage;