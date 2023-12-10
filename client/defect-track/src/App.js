import './App.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import AboutUs from './Components/AboutUsPage/AboutUsPage.jsx';
import ProductPage from './Components/ProductsPage/PruductsPage.jsx';
import BatchesPage from './Components/BatchesPage/BatchesPage.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path='/products' element={<ProductPage/>} />
          <Route path='/batches' element={<BatchesPage/>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
