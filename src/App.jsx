// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutProject from './pages/AboutProject';
import JoinMission from './pages/JoinMission';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import AboutCowPuja from './component/AboutCowPuja';
import VedaAboutCow from './component/VedaAboutCow';
import SpiritualImp from './component/SpiritualImp';
import Testimonials from './component/Testimonials';
import Gallery from './component/Gallery';
import Profile from './pages/Profile';
import CowCardPage from './pages/CowCardPage';
import PageNotFound from './pages/404';
import AdoptGaumata from './pages/AdoptGaumata';
import DonateNow from './component/DonateNow';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import { AuthProvider } from './component/Auth/AuthContext';
import Navbar from './component/Navbar';
import ForgotPassword from './pages/Auth/ForgetPassword';
import ResetPassword from './pages/Auth/ResetPassword';
import UserDashboard from './pages/UserDashboard';
import Footer from './component/Footer';
import RedirectUnauthorized from './component/Auth/RedirectUnauthorized';
import AuthLayout from './component/Auth/AuthLayout';
import WhatsAppFloatingButton from './component/FloatingWhatsApp';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <AuthLayout>
      <AuthProvider>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-project" element={<AboutProject />} />
          <Route path="/adopt-gaumata" element={<AdoptGaumata />} />
          <Route path="/join-mission" element={<JoinMission />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/cow-puja" element={<AboutCowPuja />} />
          <Route path="/veda-cow" element={<VedaAboutCow />} />
          <Route path="/spiritual-importance" element={<SpiritualImp />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gaumata/:id" element={<CowCardPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/donate-now" element={<DonateNow />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Admin Route */}
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
        
          {/* Protected Route */}
          <Route
            path="/my-account"
            element={
              <RedirectUnauthorized>
                <UserDashboard />
              </RedirectUnauthorized>
            }
          />
        </Routes>

        {/* Common Components */}
        <Footer />
        <WhatsAppFloatingButton />
      </AuthProvider>
    </AuthLayout>
  );
}

export default App;
