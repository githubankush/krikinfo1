import React from 'react';

const LatestInfo = () => {
  return (
    
    <div className="w-1/2 mx-auto border-2 mt-10 border-red-600 flex items-center justify-evenly gap-6 p-6 bg-white shadow-md rounded-lg">
      {/* First Image Area */}
      <div className="w-1/4">
        <img
          src="https://via.placeholder.com/300"
          alt="Image 1"
          className="w-1/2 h-auto rounded-lg"
        />
      </div>

      {/* Text Area */}
      <div className="w-1/4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
       
      </div>

      {/* Second Image Area */}
      <div className="w-1/4">
        <img
          src="https://via.placeholder.com/300"
          alt="Image 2"
          className="w-1/2 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default LatestInfo;
