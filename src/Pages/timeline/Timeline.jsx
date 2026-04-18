import React, { useContext, useState } from 'react';
import { FriendContext } from '../../context/Interactions';
import { BsChatTextFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaArrowTurnDown } from 'react-icons/fa6';

const Timeline = () => {
    const [filter, setFilter] = useState("all");
    const [latest, setLatest] = useState(true);

    const { timeline } = useContext(FriendContext);

    const filteredTimeline =
        filter === "all" ? timeline : timeline.filter(t => t.type === filter);

    const actionType = {
        call: <BiSolidPhoneCall size={30} />,
        text: <BsChatTextFill size={30} />,
        video_call: <BsFillCameraVideoFill size={30} />
    }


    const handleSort = () => {
        if (latest) {
            timeline.sort((a, b) => b.date - a.date);
        }
        else {
            timeline.sort((a, b) => a.date - b.date);
        }
    }
    handleSort();

    return (
        <div className='space-y-6 my-20 w-[80%] mx-auto'>
            <h1 className='text-5xl font-semibold'>Timeline</h1>
            <div>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1 flex gap-3 items-center">Filtered Timeline <FaArrowTurnDown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setFilter('all')}><a>All</a></li>
                        <li onClick={() => setFilter('call')}><a>Call</a></li>
                        <li onClick={() => setFilter('text')}><a>Text</a></li>
                        <li onClick={() => setFilter('video_call')}><a>Video</a></li>
                    </ul>
                </div>

                <div onClick={() => setLatest(!latest)} className='btn btn-soft btn-neutral'>{latest ? 'Latest' : 'Oldest'}</div>
            </div>

            <div className='space-y-6'>
                {
                    filteredTimeline.map(t => <div key={t.id} className='bg-white rounded-lg p-4 flex flex-col sm:flex-row gap-4 items-center text-center sm:text-start'>
                        <div>{actionType[t.type]}</div>
                        <div>
                            <p><span className='text-xl font-medium capitalize'>{t.type}</span> with {t.friend}</p>
                            <p className='font-medium'>{new Date(t.date).toLocaleString()}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Timeline;