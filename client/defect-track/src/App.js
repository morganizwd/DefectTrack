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
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';

function App() {
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
              <Route path='/registration' element={<RegistrationPage/>} />
              <Route path='/login' element={<LoginPage/>} />
            </Routes>
          </Box>
        <Footer/>
      </Box>
    </div>
  );
}

export default App;