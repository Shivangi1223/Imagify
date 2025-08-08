// import React, { useContext } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import Home from './pages/Home'
// import Result from './pages/Result'
// import BuyCredit from './pages/BuyCredit'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Login from './components/Login'
// import { AppContext } from './context/AppContext'

// // import Result from './pages/Result'

// const App = () => {

//      const {showLogin} = useContext(AppContext)

//   return (
//     <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
//       <ToastContainer position='bottom-right'/>
//       <Navbar />
//       {showLogin && <Login/>}
//       <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/result' element={<Result/>}/>
//       <Route path='/buy' element={<BuyCredit/>}/>
//       </Routes>
//       <Footer />
//     </div>
//   )
// }

// export default App



import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 6000); // 5 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/buy" element={<BuyCredit />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
