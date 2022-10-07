import React from 'react';

const Navbar = () => {
    return (
        <div className="mx-24 mt-3">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl" href='/' >cOfFeE~HoU$e</a>
                </div>
                <div className="flex-none">

                    <a href="/"><button className='btn btn-ghost hover:btn-link'>Return</button></a>

                    <div>
                        <label className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm bg-orange-500 indicator-item">8</span>
                            </div>
                        </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;