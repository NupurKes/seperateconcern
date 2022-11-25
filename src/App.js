import "./App.css";
import Home from  "./pages/Home";
import Contact from  "./pages/Contact";
import About from  "./pages/About";
import { Route , Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
return (
<div>
    <Header />
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
</div>)
}

export default App;
