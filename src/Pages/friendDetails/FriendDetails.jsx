import React, { useContext } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineArchiveBox, HiOutlineBellSnooze, HiOutlineTrash } from 'react-icons/hi2';
import { PiChatCircleTextBold, PiVideoCameraBold } from 'react-icons/pi';
import { useLoaderData, useParams } from 'react-router';
import { FriendContext } from '../../context/Interactions';

const FriendDetails = () => {
    const { id } = useParams();

    const friends = useLoaderData();

    const expectedFriend = friends.find(f => f.id == id);

    const { handleInteraction } = useContext(FriendContext);
    return (
        <div className='w-[80%] mx-auto grid grid-cols-3 gap-6 my-20'>
            <div>
                <div className="shadow-sm rounded-lg p-6 bg-white gap-3 flex flex-col justify-center items-center ">
                    <div>
                        <img src={`${expectedFriend.picture}`} className='rounded-full w-20 h-20' />
                    </div>
                    <div className='space-y-2 text-center'>
                        <h4 className='text-xl font-semibold'>{expectedFriend.name}</h4>
                        <p className={`${expectedFriend.status === 'overdue' ? 'bg-amber-500' : expectedFriend.status === 'on_track' ? 'bg-red-500' : 'bg-emerald-900'} badge text-white capitalize font-medium p-2.5 rounded-full`}>{expectedFriend.status}</p>
                        <div className='flex gap-2 justify-center'>
                            {
                                expectedFriend.tags.map((tag, i) => <p key={i} className='badge bg-green-300 rounded-full uppercase font-medium p-2'>{tag}</p>)
                            }
                        </div>
                        <p className='text-gray-400 italic'>"{expectedFriend.bio}"</p>
                        <p className='text-gray-400 text-sm'>{expectedFriend.email}</p>
                    </div>
                </div>
                <div className='grid grid-rows-3 my-4 gap-4'>
                    <div className="shadow-sm rounded-lg p-4 bg-white flex gap-2 font-medium justify-center items-center"><HiOutlineBellSnooze /> Snooze 2 weeks
                    </div>
                    <div className="shadow-sm rounded-lg p-4 bg-white flex gap-2 font-medium justify-center items-center"><HiOutlineArchiveBox /> Archive</div>
                    <div className="shadow-sm rounded-lg p-4 bg-white flex gap-2 font-medium justify-center items-center text-red-500"><HiOutlineTrash /> Delete</div>
                </div>
            </div>

            <div className='grid grid-cols-3 gap-6 col-span-2'>
                <div className='bg-white rounded-lg py-8 px-4 flex flex-col gap-4 justify-center items-center'>
                    <h3 className='text-3xl font-semibold'>{expectedFriend.days_since_contact}</h3>
                    <p className='text-lg text-gray-400'>Days Since Contact</p>
                </div>
                <div className='bg-white rounded-lg py-8 px-4 flex flex-col gap-4 justify-center items-center'>
                    <h3 className='text-3xl font-semibold'>{expectedFriend.goal}</h3>
                    <p className='text-lg text-gray-400'>Goal(Days)</p>
                </div>
                <div className='bg-white rounded-lg py-8 px-4 flex flex-col gap-4 justify-center items-center'>
                    <h3 className='text-3xl font-semibold'>{expectedFriend.next_due_date}</h3>
                    <p className='text-lg text-gray-400'>Next Due</p>
                </div>
                <div className='bg-white rounded-lg p-6 space-y-4 col-span-3'>
                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-medium'>Relationship Goal</p>
                        <button className='btn'>Edit</button>
                    </div>
                    <p className='text-lg'><span className='text-gray-400'>Connect every</span> <span className='font-bold'>{expectedFriend.goal} days</span></p>
                </div>
                <div className='bg-white rounded-lg p-6 space-y-4 col-span-3'>
                    <p className='text-xl font-medium'>Relationship Goal</p>
                    <div className='grid grid-cols-3 gap-4'>
                        <div onClick={() => handleInteraction(expectedFriend, 'call')} className="btn h-auto cursor-pointer rounded-lg bg-base-200 flex flex-col gap-2 p-4 justify-center items-center">
                            <FiPhoneCall size={24} />
                            <p className='text-lg'>Call</p>
                        </div>
                        <div onClick={() => handleInteraction(expectedFriend, 'text')} className="btn h-auto cursor-pointer rounded-lg bg-base-200 flex flex-col gap-2 p-4 justify-center items-center">
                            <PiChatCircleTextBold size={24} />
                            <p className='text-lg'>Text</p>
                        </div>
                        <div onClick={() => handleInteraction(expectedFriend, 'video_call')} className="btn h-auto cursor-pointer rounded-lg bg-base-200 flex flex-col gap-2 p-4 justify-center items-center">
                            <PiVideoCameraBold size={24} />
                            <p className='text-lg'>Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;