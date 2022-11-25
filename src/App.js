import "./App.css";

import Home from  "./pages/Home";
import Contact from  "./pages/Contact";
import About from  "./pages/About";

import { Route , Routes } from "react-router-dom";

function App() {
return (
<div>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
</div>)
}

export default App;
