import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img 
        src="https://media.giphy.com/media/3o7aD2sa1g0g0g0g0g/giphy.gif" 
        alt="Funny GIF" 
        className="mb-4"
      />
      <h1 className="text-4xl font-bold text-red-500">Oops! Page Not Found</h1>
      <p className="mt-2 text-lg text-gray-700">It seems we can't find the page you're looking for.</p>
    </div>
  );
};

export default NotFound;
