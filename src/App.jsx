import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, AboutUs, ContactUs, Products } from './pages';
// Define the different routes for your app
// const Home = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;
const NotFound = () => <div className='flex flex-col justify-center items-center gap-8 h-screen'><h1 className='text-center text-red-400 font-extrabold text-8xl'>404</h1><h2>Requested Page Not Found</h2></div>;

// Render the Navigation config using the Router, Route, and Link components
function App() {
 return (
    <div className="">
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/about-us" element={ <AboutUs/> } />
      <Route path="/products" element={<Products/>} />
      <Route path='/contact-us' element={< ContactUs/>} />
      <Route path="/*" element={ <NotFound/> } />
    </Routes>
  </div>
 );
}

export default App;