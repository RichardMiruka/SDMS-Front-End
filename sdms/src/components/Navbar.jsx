// import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [tournamentOpen, setTournamentOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate=useNavigate()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        setTournamentOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const login= () => {
    navigate('/login')
  }
  const register = () => {
    navigate('/Register')
  }

  return (
    <div className="w-full bg-gray-700">
      <div className="relative flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            className="text-lg font-bold tracking-tighter text-blue-600 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
            href="/home"
          >
            SDMS
          </a>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
              <path className={open ? 'hidden' : 'block'} fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
              <path className={open ? 'block' : 'hidden'} fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>

        <nav className={`md:flex md:justify-end md:flex-row lg:border-l-2 lg:pl-2 ${open ? 'flex' : 'hidden'}`}>
          <a className="px-4 py-2 mt-2 text-sm text-white md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
            <Link to="/about">About</Link>
          </a>
          <a className="px-4 py-2 mt-2 text-sm text-white md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
            <Link to="/contact">Contact</Link>
          </a>

          <div className={`relative ${tournamentOpen ? 'group' : ''}`} ref={dropdownRef}>
            <button
              id="dropdownDividerButton"
              data-dropdown-toggle="dropdownDivider"
              className="px-4 py-2 mt-2 text-sm text-white md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline flex items-center"
              onClick={() => setTournamentOpen(!tournamentOpen)}
            >
              Tournament <span className={`ml-1 ${tournamentOpen ? 'transform rotate-180' : ''}`}>▼</span>
            </button>
            <div className={`z-10 ${tournamentOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute mt-2 space-y-2`}>
            <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby="dropdownDividerButton">
    <li>
      <Link to="/events" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Games & Draws</Link>
    </li>
    <li>
      <Link to="Teams" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Teams</Link>
    </li>
    <li>
      <Link to="/coaches" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Coaches</Link>
    </li>
    <li>
      <Link to="/players" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Players</Link>
    </li>
  </ul>
              {/* <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
              </div> */}
            </div>
          </div>
          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            <button onClick={login} className="items-center block px-10 py-2.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
             LOGIN
            </button>
            <button onClick={register} className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
