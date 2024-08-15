import React from 'react';
import Ethiopiamap from '../../assets/Ethiopiamap.png';

const WhereToBuy = () => {
  return ( 
     <>
     <div className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-3
        gap-8 place-items-center'>
            {/* text-content section */}
            <div className='space-y-8'>
                <h1 className='text-4xl font-bold text-dark
                font-serif'>where to buy our Foods?</h1>
                <div className='flex items-center gap-4'>
                    <input type="text"
                     placeholder='country'
                    className='input-style w-full lg:w-[120px]' />

                    <input type="text"
                     placeholder='Zipcode'
                    className='input-style w-full' />
                </div>
                <button className='primary-btn'>Search</button>
            </div>
            {/* map section */}
            <div className='col-span-2'>
                <img src={Ethiopiamap} alt="" 
                className='w-full sm:w-[500px] mx-auto'/>
            </div>
        </div>
    </div>
  </>
  );
  
};

export default WhereToBuy;    