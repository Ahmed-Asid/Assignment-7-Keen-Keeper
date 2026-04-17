import React, { useContext } from 'react';
import { FriendContext } from '../../context/Interactions';
import { BsChatTextFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';

const Timeline = () => {

    const { timeline } = useContext(FriendContext);

    const actionType = {
        call: <BiSolidPhoneCall size={30} />,
        text: <BsChatTextFill size={30} />,
        video_call: <BsFillCameraVideoFill size={30} />
    }
    return (
        <div className='space-y-6 my-20 w-[80%] mx-auto'>
            <h1 className='text-5xl font-semibold'>Timeline</h1>

            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>

            <div className='space-y-6'>
                {
                    timeline.map(t => <div key={t.id} className='bg-white rounded-lg p-4 flex gap-4 items-center'>
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