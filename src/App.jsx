import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, AboutUs, ContactUs, Products, MensSection, KidsSection, SaleSection, WomensSection, Brands} from './pages';



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
      <Route path='/mens' element={< MensSection/>} />
      <Route path='/womens' element={< WomensSection/>} />
      <Route path='/kids' element={< KidsSection/>} />
      <Route path='/sale' element={< SaleSection/>} />
      <Route path='/Brands' element={< Brands/>} />
      <Route path="/*" element={ <NotFound/> } />
    </Routes>
  </div>
 );
}

export default App;