import React from 'react';
import ShiroImg from '../../assets/shiro.png';

const Hero = () => {
  return <main className='md:px-12 md:py-6 bg-primaryDark'>
    <section className='relative min-h-[650px]
    bg-gradient-to-r from-primary to-secondary
    w-full md:rounded-xl shadow-md'>
        <div className='container'>
            {/*Navbar section*/}

            {/*Hero section*/}
            <div className='grid grid-cols-1
            md:grid-cols-2 lg:grid-cols-3
            place-items-center min-h-[650px]'>
                {/*text content section */}
                <div className='text-white mt-[100px] md:mt-0 p-4 space-y-4 '>
                    <h1 className='text-3xl pl-6 md:pl-14'>01___________</h1>
                    <h1 className='text-5xl font-bold uppercase text-shadow'> 
                        A Delicious Food</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet
                     consectetur adipisicing elit.
                      Voluptatibus fugit laboriosam iure 
                      voluptatum neque?</p>
                      <button className='primary-btn'>shop Now</button>
                </div>
                {/*image section */}
                <img src={ShiroImg} alt="not found "
                className='relative z-10 w-[400px]
                img-shadow' />


                {/*blank div section */}
                <div className='md:hidden'></div>
            </div>

        </div>
        
        {/*background large text */}
      <h1 className='large-text'>shiro</h1>

      {/* sidebar section */}

      
    </section>
    </main>;
  
};

export default Hero;