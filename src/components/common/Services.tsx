import React from 'react';
import GraphicDesign from './GraphicDesign';
import Photography from './Photography';

const Services: React.FC = () => {
  return (
    <>
      <div className='h-auto min-h-screen flex items-start justify-between flex-col md:flex-row'>
        <GraphicDesign />
        <Photography />
      </div>
    </>
  );
};

export default Services;
