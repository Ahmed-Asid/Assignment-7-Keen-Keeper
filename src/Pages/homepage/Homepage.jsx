import React from 'react';
import Banner from '../../components/home/Banner';
import Friends from '../../components/home/friends/Friends';

const Homepage = () => {
    return (
        <div className='my-20 w-[80%] mx-auto'>
            <Banner />
            <Friends />
        </div>
    );
};

export default Homepage;