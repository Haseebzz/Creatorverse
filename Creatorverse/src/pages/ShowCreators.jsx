import React from 'react';
import Card from '../components/Card';

const ShowCreators = ({ creators }) => {
  return (
    <div className='text-white max-w-[1240px] mx-auto py-16'>
        <div className='grid md:grid-cols-2 gap-16'>
      {creators.length > 0 ? (
        creators.map((creator) => (
          <Card key={creator.id} creator={creator} />
        ))
      ) : (
        <p>No content creators available.</p>
      )}
    </div>
    </div>
  );
};

export default ShowCreators;