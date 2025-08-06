import React from 'react';
import { useNavigate } from 'react-router-dom';
import indiaMap from '../assets/indiaMap.jpg';


const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-blue-100 flex flex-col justify-center items-center relative">
      <h1 className="text-4xl font-bold mb-4">AI Image Generator Web App</h1>
      <div className="relative w-[90%] max-w-4xl">
        <img src={indiaMap} alt="India Map" className="w-full h-auto" />

        {/* AI Markers */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs sm:text-sm md:text-base text-white font-bold bg-blue-600 px-2 py-1 rounded-full shadow-md animate-pulse"
            style={{
              top: `${Math.random() * 80 + 5}%`,
              left: `${Math.random() * 80 + 5}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            AI
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-10 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
      >
        Enter Website 🚀
      </button>
    </div>
  );
};

export default Landing;
