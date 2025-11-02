import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";


export default function App() {
    return (
        <div className="app-shell">
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/o-nas" element={<About />} />
                    <Route path="/kontakt" element={<Contact />} />
                    <Route path="*" element={<h2>404 – nie znaleziono strony</h2>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}