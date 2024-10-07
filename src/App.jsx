// src/App.jsx
import React, { Suspense, lazy, memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './component/Auth/AuthContext';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import WhatsAppFloatingButton from './component/FloatingWhatsApp';
import RedirectUnauthorized from './component/Auth/RedirectUnauthorized';
import AuthLayout from './component/Auth/AuthLayout';

// Lazy loading for better performance
const HomePage = lazy(() => import('./pages/Home'));
const AboutProject = lazy(() => import('./pages/AboutProject'));
const JoinMission = lazy(() => import('./pages/JoinMission'));
const Shop = lazy(() => import('./pages/Shop'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const AboutCowPuja = lazy(() => import('./component/AboutCowPuja'));
const VedaAboutCow = lazy(() => import('./component/VedaAboutCow'));
const SpiritualImp = lazy(() => import('./component/SpiritualImp'));
const Testimonials = lazy(() => import('./component/Testimonials'));
const Gallery = lazy(() => import('./component/Gallery'));
const Profile = lazy(() => import('./pages/Profile'));
const CowCardPage = lazy(() => import('./pages/CowCardPage'));
const PageNotFound = lazy(() => import('./pages/404'));
const AdoptGaumata = lazy(() => import('./pages/AdoptGaumata'));
const DonateNow = lazy(() => import('./component/DonateNow'));
const Login = lazy(() => import('./pages/Auth/Login'));
const SignUp = lazy(() => import('./pages/Auth/SignUp'));
const ForgotPassword = lazy(() => import('./pages/Auth/ForgetPassword'));
const ResetPassword = lazy(() => import('./pages/Auth/ResetPassword'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));

function App() {
  return (
    <AuthProvider>
      <AuthLayout>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
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
            <Route
              path="/my-account"
              element={
                <RedirectUnauthorized>
                  <UserDashboard />
                </RedirectUnauthorized>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppFloatingButton />

      </AuthLayout>
    </AuthProvider>
  );
}

export default memo(App);
