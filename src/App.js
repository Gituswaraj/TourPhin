import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import TouristGuideButton from './components/Home/TouristGuideButton';
import TouristGuideForm from './components/Home/TouristGuideForm';
import Destinations from './components/Destinations';
import AiHelp from './components/AiHelp';
import Packages from './components/Packages';
import PackageDetails from './components/PackageDetails';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import LoginPage from './components/LoginP or Reg/loginPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/navbar';
import SignUp from './components/LoginP or Reg/signUp'; // Import the SignUp component    

function App() {
  const [showTouristGuideForm, setShowTouristGuideForm] = React.useState(false);
  const destinationsRef = React.useRef(null);

  const handleTouristGuideClick = () => {
    setShowTouristGuideForm(true);
  };

  const handleCloseForm = () => {
    setShowTouristGuideForm(false);
  };

  return (
    <Router>
      <div id="wrapper">
         {/* Navbar */}
        <Navbar handleTouristGuideClick={handleTouristGuideClick} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<Destinations />} />
          <Route path="/aihelp" element={<AiHelp />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:id" element={<PackageDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signUp' element={<SignUp/>}/>
          {/* Add more routes as needed */}
        </Routes>

        {/* Tourist Guide Form Modal */}
        {showTouristGuideForm && <TouristGuideForm onClose={handleCloseForm} />}

        <Footer />
      </div>
    </Router>
  );
}

export default App;