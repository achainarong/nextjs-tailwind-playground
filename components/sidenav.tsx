import React from 'react';

const SideNav = () => {
  return (
    <div className="w-60 h-full shadow-md bg-gray-900 px-1 absolute">
      <ul className="relative">
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Home
          </a>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/grid"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Grid
          </a>
        </li>
        <li className="relative">
          <a
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-400 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
            href="/other"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Other
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
