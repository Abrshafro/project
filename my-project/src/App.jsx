import React from 'react';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import WhereToBuy from './components/WhereToBuy/WhereToBuy.jsx';

const App = () => {
  return <main
   className='overflow-x-hidden'>
    <Hero/>
    <Services/>
    <WhereToBuy/>
   </main>;
  
};

export default App;
