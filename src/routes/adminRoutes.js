import React from 'react';
import { Routes, Route } from 'react-router-dom';

//VIEWS
import Home from '../views/admin/home/Home';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/home" element={<Home />} />
    </Routes>
  );
}

export default AdminRoutes;
