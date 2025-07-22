import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/home";
// import About from "./pages/about";
// import Work from "./pages/work";
// import Contact from "./pages/contact";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App