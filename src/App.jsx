// src/App.jsx
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
import MyAccount from './pages/MyAccount';
import Footer from './component/Footer';
import { Toaster } from 'react-hot-toast';
import RedirectUnauthorized from './component/Auth/RedirectUnauthorized';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from './redux/AuthSlice';
import { useNavigate, useLocation } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const location = useLocation();  // get the current location
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.Auth);
  const fetchUserData = async () => {
    try {
      console.log("Fetching user data...");
      const response = await axios.get("/api/auth/google-user-data");
      if (response.data.success) {
        console.log("User data fetched successfully:", response.data.user);
        dispatch(SetUser({
          user: response.data.user
        }));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      dispatch(SetUser({
        user: null
      }));
      navigate('/login');
    }
  };


  useEffect(() => {
    fetchUserData();
  }, [location.pathname, user, dispatch]);
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Protected Route */}
        <Route
          path="/my-account"
          element={
            <RedirectUnauthorized>
              <MyAccount />
            </RedirectUnauthorized>
          }
        />
      </Routes>
      <Footer />
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </AuthProvider>
  );
}

export default App;
