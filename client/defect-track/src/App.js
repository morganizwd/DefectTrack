import './App.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import AboutUs from './Components/About-Us-Page/About-Us-Page.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<AboutUs />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
