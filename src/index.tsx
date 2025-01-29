import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import PublicLayout from './layouts/public/PublicLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Invoices from './pages/Invoices/Invoices';
import Estimates from './pages/Estimates/Estimates';
import Themes from './pages/Themes/Themes';
import Settings from './pages/Settings/Settings';
import App from './App';
import Login from './pages/auth/Login/Login';
import Register from './pages/auth/Register/Register';
import PrivateLayout from './layouts/private/PrivateLayout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddInvoice from './pages/AddInvoice/AddInvoice';


const THEME = createTheme({
  typography: {
    "fontFamily": `"Barlow", "sans-serif", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 500,
    "fontWeightMedium": 600
  }
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>

      {/* User routes start */}
      <Route index element={<Navigate to='/app' />} />
      <Route path='/app' element={<PrivateLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="invoices/new" element={<AddInvoice />} />
        <Route path="estimates" element={<Estimates />} />
        <Route path="themes" element={<Themes />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      {/* User routes end */}

      {/* Auth routes start */}
      <Route path='/auth' element={<PublicLayout />}>
        <Route index element={<Navigate to={'/auth/login'} />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      {/* Auth routes end */}

      {/* Not found route start */}
      <Route path='*' element={<Navigate to={'/'} />} />
      {/* Not found route end */}
    </Route>
  )
);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
