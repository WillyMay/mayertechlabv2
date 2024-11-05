import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import NoPage from "./components/NoPage";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import logo from "./assets/logo.webp";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { navigation } from "./js/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar logoUrl={logo} navUrl={navigation}/>} >
          <Route index element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer logoUrl={logo} name={"Mayer Tech Lab"} navUrl={navigation}/>
    </BrowserRouter>
  );
}

export default App;
