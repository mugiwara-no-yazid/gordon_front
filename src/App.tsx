
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer } from "./components/footer"
import Navbar from "./components/navbar"
import ServicesPage from "./pages/services"
import Home from "./pages/landing"
import ProjetsPage from "./pages/projet"
import AProposPage from "./pages/Apropos"
import ContactPage from "./pages/contact"
import ServiceDetailPage from "./pages/ServiceDetailPage"
import ScrollToTop from "./pages/scrollTop"
import DevisPage from "./pages/DevisPage"


export default function App() {
  return (
    <BrowserRouter>
     <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projets" element={<ProjetsPage/>}/>
          <Route path="/a-propos" element={<AProposPage/>}/>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/devis" element={<DevisPage />} />
        </Routes>
      </div> 
      <Footer />
    </BrowserRouter>
  )
}