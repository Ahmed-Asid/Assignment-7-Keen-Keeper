import React, { Suspense } from 'react';
import Friend from './friendui/Friend';

const Friends = ({ friends }) => {

    return (
        <div className='space-y-4'>
            <h3 className='text-2xl font-semibold'>Your Friends</h3>
            <Suspense fallback={<div className='w-screen h-[80%] flex justify-center items-center'><span className="loading loading-ring loading-xl"></span></div>}>
                <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {
                        friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Friends;