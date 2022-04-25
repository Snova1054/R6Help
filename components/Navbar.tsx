import Link from 'next/link';
import { useState } from 'react';
import type { NextPage } from 'next'
import Index from 'pages/index'
import Maps from 'pages/maps'
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  StarIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline"

import {
  UsersIcon,
} from "@heroicons/react/solid"


function Navbar(props: any){ 

  if(props.maps == null || props.maps == undefined)
  {
    console.log("hello");
  }
  // const handleClick = () => {
  //   setActive(!active);
  // };

  return (
    <div className='text-gray-500 p-5 text-sm border-r bg-black overflow-y-scroll scrollbar-hide h-screen'>
      <div className='space-y-4'>
        <button onClick={() => props.setRender(props.home)} className='flex items-center space-x-2
        hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Home</p>
        </button>
        <button onClick={() => props.setRender(<Maps setRender={props.setRender} />)} className='flex items-center space-x-2
        hover:text-white'>
          <LibraryIcon className='h-5 w-5' />
          <p>Maps</p>
        </button>
        <Link href={"/operators"} passHref>
          <button className='flex items-center space-x-2
          hover:text-white'>
            <UsersIcon className='h-5 w-5' />
            <p>Operators</p>
          </button>
        </Link>
        <Link href={"/"} passHref>
          <button className='flex items-center space-x-2
          hover:text-white'>
            <StarIcon className='h-5 w-5' />
            <p>Ideas</p>
          </button>
        </Link>
        <Link href={"/"} passHref>
          <button className='flex items-center space-x-2
          hover:text-white'>
            <PlusCircleIcon className='h-5 w-5' />
            <p>Extra</p>
          </button>
        </Link>
      </div>
    </div>
        /* <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <svg
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              className='fill-current text-white h-8 w-8 mr-2'
            >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span className='text-xl text-white font-bold uppercase tracking-wide'>
              Talwind CSS
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button> */
        /*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */
        /* <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            {children}
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Services
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                About us
              </a>
            </Link>
            <Link href='/maps/bank'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                Contact us
              </a>
            </Link>
          </div>
        </div> */
  );
};

export default Navbar;