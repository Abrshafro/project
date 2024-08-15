import React from 'react';
import Breakfast from "../../assets/foods/Breakfast.png";
import Lunch from "../../assets/foods/Lunch.png";
import Dinner from "../../assets/foods/Dinner.png";
import { FaImages } from 'react-icons/fa';

const ServicesData = [
    {
        id:1,
        image: Breakfast,
        title: "Breakfast",
        subtitle: "lorem ipsum dolor sit amet, consecadipliscing elit.",
        aosDelay:"300",
    },
    {
        id:2,
        image: Lunch,
        title: "Lunch",
        subtitle: "lorem ipsum dolor sit amet, consecadipliscing elit.",
        aosDelay:"500",
    },
    {
        id:3,
        image: Dinner,
        title: "Dinner",
        subtitle: "lorem ipsum dolor sit amet, consecadipliscing elit.",
        aosDelay:"700",
    },
];

const Services = () => {
  return  <div className='container my-16 space-y-4'>
  {/*header section */}
  <div className='text-center max-w-lg mx-auto
  space-y-2'>
    <h1 className='text-3xl font-bold text-dark
    '>Fresh and <span className='text-primary'>
        Yummy Foods</span>{""}
        </h1>
        <p className='text-sm opacity-50'>
            Lorem ipsum dolor sit, amet 
            consectetur adipisicing elit. Adipisci
            reiciendis maxime nesciunt quas suscipit
            fuga deleniti voluptas cum minus 
            cupiditate!
        </p>
  </div >
  {/* Card section */}
  <div className='grid grid-cols-1 sm:grid-cols-2
  md:grid-cols-3 gap-8'>
       {ServicesData.map(({id, image, title, subtitle, 
        aosDelay }) =>(
        <div 
        key={id}
         data-aos="fade-up"
         data-aos-delay={aosDelay}
         className='p-4 text-center space-y-6'>
            <img
             src={image} 
             alt="" 
             className='max-w-[200px]mx-auto
               hover:scale-110 duration-300 img-shadow2' 
            />
            <div className='space-y-2'>
                <h1 className='text-2xl font-bold
                text-primary'>{title}</h1>
                <p className='text-dark'>{subtitle}</p>
            </div>
            </div>

       ))}
  </div> 
  </div>;
  
};

export default Services;