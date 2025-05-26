import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Destinations from "./routes/Destinations";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
