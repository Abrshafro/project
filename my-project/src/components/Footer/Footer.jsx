import React from 'react';
import {FaFacebookF,FaTiktok,FaTelegram, FaFacebook} from 
'react-icons/fa';
const Footer = () => {
  return(
  <div className='bg-gradient-to-r from-primary
  to-secondary pt-12 pb-8 text-white'>
    <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2
        md:grid-cols-3 gap-8'>
            {/*company detail section */}
            <div data-aos='fade-up'
             className='space-y-6'>
              <h1 className='text-4xl font-bold'>AB SHIRO</h1>
              <p className=' text-lg font-medium font-serif max-w-[300px]'>
                AB-SHIRO is located in Addis Ababa (Bole, Megenagna, Mexico, Saris), Bahir Dar, Gondar, Jimma, 
                Debre Birhan, Jigjga, Mekele, Hawassa, Assosa, Adama.
                You can Order from where you located.
              </p>
            </div>
            {/* NavLink section */}
            <div data-aos='fade-up'
             data-aos-delay='300'
            className='space-y-6'>
                <h1 className='text-4xl font-bold'>Quick Links</h1>
                <div >
                    {/* First column links */}
                 <div className=' cursor-pointer font-serif text-xl'>
                    <ul className='space-y-2'>
                    <li href="#">Home</li>
                    <li href="#">About</li>
                    <li href="#">contact</li>
                   {/* <li href="#">Serach Foods</li>*/}
                    </ul>
                 </div>
                    {/* second column links */}
                  {/*  <div>
                    <ul className='space-y-2'>
                    <li href="#">Home</li>
                    <li href="#">About</li>
                    <li href="#">contact</li>
                    <li href="#">Serach Foods</li>
                    </ul>
                 </div>*/}
                </div>
            </div>
            {/* social links section */}
            <div data-aos='fade-up'
            data-aos-delay='500'
            className='space-y-6'>
                <h1 className='text-4xl font-bold'>Follow Us
                </h1>
                <div className='text-xl font-serif'>
                    <p>+251967200929</p>
                    <p>Abrham Getahun</p>
                </div>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <FaTiktok className='text-3xl
                    hover:scale-105 duration-300'/>
                     <FaTelegram className='text-3xl
                    hover:scale-105 duration-300'/>
                     <FaFacebook className='text-3xl
                    hover:scale-105 duration-300'/>

                </div>
            </div>
        </div>

        {/* copyright section */}
        <p className='text-white text-center mt-8 pt-8
        border-t-2 text-xl font-serif'>copyright &copy; 2024 AB SHIRO. All rights 
            reserved.
        </p>

    </div>
  </div>
  );
  
};

export default Footer; 