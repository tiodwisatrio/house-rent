import React, { useContext } from 'react';

// import context
import { HouseContext } from './HouseContext';
// import components
import House from './House';
// import link
import { Link } from 'react-router-dom';
// import icons
import { ImSpinner2 } from 'react-icons/im';
// import character empty search
import EmptySearch from '../assets/img/empty-search.png'

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='mt-16 lg:mt-24 flex flex-col text-center items-center justify-center gap-y-8'>
        <img className='w-1/2 lg:w-1/4' src={EmptySearch} alt="empty-search-character" />
        <p className='text-xl lg:text-2xl text-violet-600'>Sorry, Nothing Was Not Found.</p>
        
      </div>
    );
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <Link to={`/property/${house.id}`} key={index}>
                <House house={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
