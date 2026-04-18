import { React, use } from 'react';
import Banner from '../../components/home/Banner';
import Friends from '../../components/home/friends/Friends';

const friendsPromise = fetch('/friends.json').then((res) => res.json());

const Homepage = () => {

    const friends = use(friendsPromise);

    return (
        <div className='my-20 w-[90%] md:w-[80%] mx-auto'>
            <Banner friends={friends} />
            <Friends friends={friends} />
        </div>
    );
};

export default Homepage;