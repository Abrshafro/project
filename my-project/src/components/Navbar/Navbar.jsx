import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = ({sidebar,setSidebar}) => {
  return(
   <div className='absolute top-0 left-0 w-full
   text-white z-20'>
    <div data-aos='fade-up' className='container'>
      <div className='flex justify-between
      items-center'>
        {/*logo section */}
        <h1 className='text-4xl font-bold
        uppercase font-serif'>ab <span className='font-normal
        text-2xl'>shiro</span>
        </h1>
        {/*Navlinks Section */}
        <ul className=' lg:flex hidden space-x-10 text-xl font-serif cursor-pointer'>
          <li href="#">Home</li>
          <li href="#">Services</li>
          <li href="#">WhereToBuy</li>
        </ul>
        {/*Hamburger menu */}
        <div onClick={()=>setSidebar(!sidebar)}>
         <GiHamburgerMenu className='text-3xl 
          cursor-pointer'/>
        </div>
      </div>

    </div>

   </div>
  );
  
};

export default Navbar;