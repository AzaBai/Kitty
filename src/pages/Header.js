import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
                <div className="flex items-center flex-no-shrink text-white mr-6">

                    <span className="font-semibold text-xl tracking-tight">Hello Kitty</span>
                </div>

                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/"
                           className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            Home
                        </Link>
                        <Link to="/random"
                           className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                            Random cat
                        </Link>
                        <Link to="/breeds"
                           className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                            Breeds
                        </Link>
                    </div>
                    <div>
                        <Link to="#"
                           className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-red-300 mt-4 lg:mt-0">Download</Link>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;