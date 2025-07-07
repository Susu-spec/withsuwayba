import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./sections/home";
import About from "./sections/about";
import Work from "./sections/work";
import Contact from "./sections/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
