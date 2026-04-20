import React, { useContext, useMemo, useState } from 'react';
import { FriendContext } from '../../context/Interactions';
import { BsChatTextFill, BsFillCameraVideoFill } from 'react-icons/bs';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaArrowTurnDown } from 'react-icons/fa6';

const Timeline = () => {
    const [filter, setFilter] = useState("all");
    const [latest, setLatest] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    const [search, setSearch] = useState(false);

    const { timeline } = useContext(FriendContext);

    const processedTimeline = useMemo(() => {

        let result = search ? timeline.filter(t =>
            t.friend.toLowerCase().includes(searchValue.trim().toLowerCase())
        )
            : timeline;

        if (filter === 'all') {
            return result;
        }
        else {
            result.filter(t => t.type === filter);
        }

        result = [...result].sort((a, b) => latest ? b.date - a.date : a.date - b.date)

        return result;

    }, [timeline, filter, search, searchValue, latest])

    const actionType = {
        call: <BiSolidPhoneCall size={30} />,
        text: <BsChatTextFill size={30} />,
        video_call: <BsFillCameraVideoFill size={30} />
    }



    return (
        <div className='space-y-6 my-20 w-[80%] mx-auto'>
            <h1 className='text-5xl font-semibold'>Timeline</h1>
            <div className='flex gap-2 justify-between'>
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

                <fieldset className='justify-end flex items-center gap-2 rounded-lg'>
                    <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type="text" placeholder='search here' className='p-1.5 border border-gray-300' />
                    <button onClick={() => setSearch(true)} type="submit" className={`btn btn-soft active:btn-primary`} >Search</button>
                    <button onClick={() => { setSearch(false); setSearchValue('') }} className={`btn btn-soft active:btn-error`} >Cancel</button>
                </fieldset>
            </div>

            <div className='space-y-6'>
                {
                    processedTimeline.map(t => <div key={t.id} className='bg-white rounded-lg p-4 flex flex-col sm:flex-row gap-4 items-center text-center sm:text-start'>
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