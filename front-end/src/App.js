import "./css/App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import SingleProduct from "./components/pages/SingleProduct";
import CreateProduct from "./components/pages/CreateProduct";
import UpdateBeer from "./components/pages/UpdateBeer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                    <Route path="/update/:id" element={<UpdateBeer />} />
                    <Route path="/create" element={<CreateProduct />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

// Bonjour Fellas
