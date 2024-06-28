import React from 'react';
import { Routes, Route } from 'react-router-dom';

//VIEWS
import Home from '../views/site/home/Home';

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

{/* <Route component={NotFound} /> */}
    </Routes>
  );
}

export default SiteRoutes;
