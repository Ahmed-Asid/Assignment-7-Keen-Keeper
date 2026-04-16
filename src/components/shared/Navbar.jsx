import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl"><span className='text-2xl font-bold'>Keen</span><span className='text-green-900 text-2xl font-semibold'>Keeper</span></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Link</a></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;