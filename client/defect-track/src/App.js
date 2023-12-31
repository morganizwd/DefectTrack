import React from 'react';
import { Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import AboutUs from './Components/AboutUsPage.jsx';
import ProductPage from './Components/ProductsPage/PruductsPage.jsx';
import BatchesPage from './Components/BatchesPage/BatchesPage.jsx';
import CommissionPage from './Components/CommissionPage/CommissionPage.jsx';
import RegistrationPage from './Components/AuthPages/RegestrationPage.jsx';
import LoginPage from './Components/AuthPages/LogInPage.jsx';
import HomePage from './Components/HomePage.jsx';
import CreateBatchPage from './Components/CreateBatch.jsx';
import ReportPage from './Components/ReportPage.jsx';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthMe, selectIsAuth } from './Redux/slices/auth.js';


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    if (window.localStorage.getItem('token')) {
      dispatch(fetchAuthMe());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <CssBaseline/>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header/>
          <Box component="main" flexGrow={1}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path='/products' element={<ProductPage/>} />
              <Route path='/batches' element={<BatchesPage/>} />
              <Route path='/commission' element={<CommissionPage/>} />
              <Route path='/reports' element={<ReportPage/>} />
              {isAuth && <Route path='/create-batch' element={<CreateBatchPage/>} />}
              {!isAuth && <Route path='/registration' element={<RegistrationPage/>} />}
              {!isAuth && <Route path='/login' element={<LoginPage/>} />}
              {isAuth && <Route path="*" element={<Navigate to="/" />} />}
              {!isAuth && <Route path="*" element={<Navigate to="/login" />} />}
            </Routes>
          </Box>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
