import React from 'react';
import { BsPlusLg } from 'react-icons/bs';

const Banner = () => {
    return (
        <div className='flex flex-col gap-10 items-center text-center mb-10'>
            <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.</p>

            <button className='bg-green-950 gap-1 text-white rounded-lg btn'><BsPlusLg /> Add a Friend</button>


            <div className='grid grid-cols-4 gap-6'>
                <div className='flex flex-col items-center justify-center gap-2 rounded-lg p-6'>
                    <h2 className='text-3xl font-semibold'>1</h2>
                    <p className='text-lg text-gray-400'>Friends</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 rounded-lg p-6'>
                    <h2 className='text-3xl font-semibold'>1</h2>
                    <p className='text-lg text-gray-400'>On Track</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 rounded-lg p-6'>
                    <h2 className='text-3xl font-semibold'>1</h2>
                    <p className='text-lg text-gray-400'>Need Attention</p>
                </div>
                <div className='flex flex-col items-center justify-center gap-2 rounded-lg p-6'>
                    <h2 className='text-3xl font-semibold'>1</h2>
                    <p className='text-lg text-gray-400'>Interactions This Month</p>
                </div>
            </div>

            <hr className='border border-gray-300 w-full mb-10' />
        </div>
    );
};

export default Banner;