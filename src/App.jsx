import { useEffect, useRef, useState } from "react";
import { useLocation, Routes, Route, useOutlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import LoadingScreen from "./components/LoadingScreen";
import WhatsAppButton from "./components/WhatsAppButton";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// Animated page wrapper
function AnimatedPage({ children }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);
  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.45s cubic-bezier(0.22,1,0.36,1)",
    }}>
      {children}
    </div>
  );
}

function AppInner() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === "/" && <LoadingScreen />}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"             element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/products"     element={<AnimatedPage><Products /></AnimatedPage>} />
        <Route path="/about"        element={<AnimatedPage><About /></AnimatedPage>} />
        <Route path="/contact"      element={<AnimatedPage><Contact /></AnimatedPage>} />
        <Route path="/certificates" element={<AnimatedPage><Certificates /></AnimatedPage>} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

function App() {
  return <AppInner />;
}

export default App;