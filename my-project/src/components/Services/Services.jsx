import React from 'react';
import Breakfast from "../../assets/foods/Breakfast.png";
import Lunch from "../../assets/foods/Lunch.png";
import Dinner from "../../assets/foods/Dinner.png";
import { FaImages } from 'react-icons/fa';

const ServicesData = [
    {
        id:1,
        image: Breakfast,
        title: "Breakfast Menu",
        subtitle: "Shiro, Ambasha Bread, Kinche, Beso Bites, Chechebsa, Enqulal Tibs, Enqulal Tibs with Siga, Ye Telba Fitfit, Ful, Bula Genfo, Fruits and Vegetables",
        aosDelay:"300",
    },
    {
        id:2,
        image: Lunch,
        title: "Lunch Menu",
        subtitle: "Beyaynetu, Fiyel Kitfo, Kitfo, Gomen Kitfo, Finto Kikil, Fiyel Tibs, Chekena Tibs, Tegabino Shiro, Shiro Bosena, Dulet, Yeshekla Tibs, DoroWot",
        aosDelay:"500",
    },
    {
        id:3,
        image: Dinner,
        title: "Dinner Menu",
        subtitle: "Mahberawi, Beyaynetu, Kunta Firfer, alecha kikil, Shiro feses, Shiro Tegabino, Shiro Bosena, Dulet, Kitfo, Gored-Gored",
        aosDelay:"700",
    },
];

const Services = () => {
  return  <div className='container my-16 space-y-4 service'>

  {/*header section */}
  
  <div className='text-center max-w-lg mx-auto
  space-y-2'>
    <h1 data-aos='fade-up' 
     className='text-3xl font-bold text-dark
    '>Fresh and <span className='text-primary'>
        Yummy Foods</span>{""}
        </h1>
        <p data-aos='fade-up' data-aos-delay='300'
        className='text-lg  opacity-50 font-serif'>
           AB-SHIRO Food and service is unique as
           is the country itself. The Tradations here 
           are authentic, and all around you are the 
           scenery, the music, aromas, food, art, history
           and culture of this ancient civilization.
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
                <p className='text-dark font-serif'>{subtitle}</p>
            </div>
            </div>

       ))}
  </div> 
  </div>;
  
};

export default Services;