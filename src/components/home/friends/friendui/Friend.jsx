import React from 'react';
import { NavLink } from 'react-router';

const Friend = ({ friend }) => {
    return (
        <NavLink to={`/friendDetails/${friend.id}`} className='rounded-lg p-6 gap-3 flex flex-col justify-center items-center bg-white shadow-md'>
            <div>
                <img src={`${friend.picture}`} className='rounded-full w-20 h-20' />
            </div>
            <div className='space-y-2 text-center'>
                <h4 className='text-xl font-semibold'>{friend.name}</h4>
                <p className='text-xs text-gray-400'>{friend.days_since_contact}d ago</p>
                <div className='flex gap-2 justify-center'>
                    {
                        friend.tags.map((tag, i) => <p key={i} className='badge bg-green-300 rounded-full uppercase font-medium p-2'>{tag}</p>)
                    }
                </div>
                <p className={`${friend.status === 'overdue' ? 'bg-amber-500' : friend.status === 'on_track' ? 'bg-red-500' : 'bg-emerald-900'} badge text-white capitalize font-medium p-2.5 rounded-full`}>{friend.status}</p>
            </div>
        </NavLink>
    );
};

export default Friend;