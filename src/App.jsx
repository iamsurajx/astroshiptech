import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Work from "./sections/Work";
import ProjectDetails from "./pages/ProjectDetails";
import Privacy from "./pages/app/privacy/PrivacyPolicy";
import TermsOfService from "./pages/app/privacy/TermsOfService";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />   
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/career" element={<Layout><Career /></Layout>} />
        <Route path="/work" element={<Layout><Work /></Layout>} />
        <Route path="/work/:slug" element={<Layout><ProjectDetails /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout><TermsOfService /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}