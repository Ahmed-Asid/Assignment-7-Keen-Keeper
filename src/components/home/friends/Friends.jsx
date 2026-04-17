import React, { use } from 'react';
import Friend from './friendui/Friend';

const friendsPromise = fetch('/friends.json').then((res) => res.json());

const Friends = () => {
    const friends = use(friendsPromise);

    return (
        <div>
            <h3 className='text-2xl font-semibold'>Your Friends</h3>
            <div className='grid grid-cols-4 gap-6'>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;