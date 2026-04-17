import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Work from "./sections/Work";
import ProjectDetails from "./pages/ProjectDetails";

function Layout({ children }) {
  return (
    <>
      <Navbar />   {/* <-- YE UNCOMMENT KARO */}
      {children}
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
      </Routes>
    </BrowserRouter>
  );
}