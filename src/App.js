

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
import Guides from './components/Guides/Guides';
import UserProfile from './components/Profile/UserProfile';


function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

// Create a conditional footer component
function ConditionalFooter() {
  const { pathname } = useLocation();
  
  // Don't render footer on home page
  if (pathname === '/') {
    return null;
  }
  
  // Render footer on all other pages
  return <Footer />;
}
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
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path="/ai-help" element={<AiHelp />} />
          <Route path='/profile' element={<UserProfile />} />
           {/* Update the guides route to pass the handleTouristGuideClick prop */}
        <Route path='/guides' element={<Guides handleTouristGuideClick={handleTouristGuideClick} />} />
      
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