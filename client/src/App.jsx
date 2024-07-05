import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import AboutProject from "./pages/AboutProject";
import AdoptGaumata from "./pages/AdoptGaumata";
import JoinMission from "./pages/JoinMission";
import Shop from "./pages/Shop";
import ContactUs from "./pages/ContactUs";
import Donate from "./pages/Donate";
import PageNotFound from "./pages/404.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/adopt-gaumata" element={<AdoptGaumata />} />
      <Route path="/about-project" element={<AboutProject />} />
      <Route path="/join-mission" element={<JoinMission />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
