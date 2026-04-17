import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-emerald-900'>
            <footer className="footer footer-horizontal footer-center bg-emerald-900 text-base-content rounded p-10 w-[80%] mx-auto">
                <div className='flex flex-col gap-4'>
                    <p className='text-5xl md:text-7xl font-bold text-white'>KeenKeeper</p>
                    <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <p className='text-white text-xl font-semibold'>Social Links</p>
                    <div className="flex gap-3">
                        <div className="rounded-full bg-white p-2.5 flex justify-center items-center"><AiFillInstagram size={16} /></div>
                        <div className="rounded-full bg-white p-2.5 flex justify-center items-center"><FaFacebook size={16} /></div>
                        <div className="rounded-full bg-white p-2.5 flex justify-center items-center"><FaXTwitter size={16} /></div>
                    </div>
                </div>
                <hr className='border border-emerald-800 w-full' />
                <aside className='flex flex-col sm:flex-row justify-between w-full text-emerald-700'>
                    <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
                    <nav className='flex flex-col md:flex-row gap-3'>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookies</a>
                    </nav>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;