import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AllBeers from './pages/allBeers/AllBeers';
import BeerDetails from './pages/beerDetails/BeerDetails';
import RandomBeer from './pages/randomBeer/RandomBeer';
import NavBar from './components/navbar/Navbar';
import React from 'react';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="*" 
          element={
            <>
              <NavBar />
              <Routes>
                <Route path="/beers" element={<AllBeers />} />
                <Route path="/beers/:beerId" element={<BeerDetails />} />
                <Route path="/random-beer" element={<RandomBeer />} />
              </Routes>
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
