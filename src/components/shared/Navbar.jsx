import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { PiChartDonutDuotone } from 'react-icons/pi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-10 md:px-20">
                <div className="flex-1">
                    <Link to='/'><span className='text-2xl font-bold'>Keen</span><span className='text-emerald-900 text-2xl font-semibold'>Keeper</span></Link>
                </div>

                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/' className={({ isActive }) => `btn btn-ghost rounded-md ${isActive ? 'text-white bg-emerald-900' : ''}`}><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/timeline' className={({ isActive }) => `btn btn-ghost rounded-md ${isActive ? 'text-white bg-emerald-900' : ''}`}><IoMdTime /> Timeline</NavLink></li>
                        <li><NavLink to='/stats' className={({ isActive }) => `btn btn-ghost rounded-md ${isActive ? 'text-white bg-emerald-900' : ''}`}><PiChartDonutDuotone /> Stats</NavLink></li>
                    </ul>
                </div>

                <div className='gap-2 font-semibold text-gray-500 hidden md:flex'>
                    <NavLink to='/' className={({ isActive }) => `btn btn-ghost rounded-md ${isActive ? 'text-white bg-emerald-900' : ''}`}><FaHome /> Home</NavLink>
                    <NavLink to='/timeline' className={({ isActive }) => `btn btn-ghost rounded-md ${isActive ? 'text-white bg-emerald-900' : ''}`}><IoMdTime /> Timeline</NavLink>
                    <NavLink to='/stats' className={({ isActive }) => `btn btn-ghost rounded-md ${isActive ? 'text-white bg-emerald-900' : ''}`}><PiChartDonutDuotone /> Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;