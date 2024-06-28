import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import SiteRoutes from './siteRoutes';
import AdminRoutes from './adminRoutes';

function AppRoutes() {
  return (

    <BrowserRouter>
      <SiteRoutes />
      <AdminRoutes/>
    </BrowserRouter>
  );
}

export default AppRoutes;
