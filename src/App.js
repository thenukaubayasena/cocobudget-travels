import { Form as RouterForm, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinations from "./routes/Destinations";
import AboutUs from "./routes/AboutUs";
import CurrentPackages from "./routes/CurrentPackages";
import Form from "./routes/Form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/current-packages" element={<CurrentPackages />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;