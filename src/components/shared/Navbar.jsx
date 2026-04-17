import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { PiChartDonutDuotone } from 'react-icons/pi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-20">
                <div className="flex-1">
                    <Link to='/'><span className='text-2xl font-bold'>Keen</span><span className='text-green-950 text-2xl font-semibold'>Keeper</span></Link>
                </div>

                <div className='flex gap-2 font-semibold text-gray-500'>
                    <NavLink to='/' className={({ isActive }) => `btn btn-ghost rounded-md ${isActive ? 'text-white bg-green-950' : ''}`}><FaHome /> Home</NavLink>
                    <NavLink to='/timeline' className={({ isActive }) => `btn btn-ghost rounded-md ${isActive ? 'text-white bg-green-950' : ''}`}><IoMdTime /> Timeline</NavLink>
                    <NavLink to='/stats' className={({ isActive }) => `btn btn-ghost rounded-md ${isActive ? 'text-white bg-green-950' : ''}`}><PiChartDonutDuotone /> Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;