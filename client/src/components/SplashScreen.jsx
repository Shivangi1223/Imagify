import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate();

  const lines = [
    "Welcome to My Imagify Website!",
    "Turn your imagination into beautiful images ✨"
  ];

  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    // Lines show sequentially
    lines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, lines[index]]);
      }, index * 1500);
    });

    // Redirect after all lines appear
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-teal-50 to-orange-50 text-center px-6 overflow-hidden relative">

      {/* Heading above Robot */}
      <h1
        className="flex items-center gap-2 text-4xl sm:text-5xl font-bold text-blue-600 mb-6 
                   transition-transform duration-300 hover:scale-110 cursor-pointer"
      >
        Imagify <span className="text-3xl sm:text-4xl">🚀</span>
      </h1>


      {/* Robot GIF */}
      <img
        src="/myCutie.gif"
        alt="Cutie Robot"
        className="w-72 sm:w-80 mb-3 animate-[float_3s_ease-in-out_infinite] 
                   transform transition-transform duration-500 hover:scale-125"
      />
      {/* Loading Line under Robot */}
      {/* Loading Line under Robot */}
      <div className="w-full max-w-md h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div className="h-full animate-loading bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-[length:200%_100%]"></div>
      </div>

      <style>
        {`
  /* Robot float animation */
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(2deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }

  /* Loading Bar Animation */
  @keyframes loading {
    0% {
      width: 0%;
      background-position: 200% 0;
    }
    100% {
      width: 100%;
      background-position: -200% 0;
    }
  }
  .animate-loading {
    animation: loading 5s linear forwards;
  }
`}
      </style>

      {/* Sequential Lines */}
      <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 leading-relaxed max-w-2xl space-y-2 mt-1">
        {visibleLines.map((line, idx) => (
          <div
            key={idx}
            className="opacity-0 animate-fadeIn"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            {line}
          </div>
        ))}
      </div>

      <style>
        {`
          /* Robot float animation */
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }

          /* Text fade-in animation */
          .animate-fadeIn {
            animation: fadeIn 1s forwards;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
