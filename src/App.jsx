import { Routes, Route } from "react-router-dom"
import NavbarContainer from "./components/Navbar/NavbarContainer"
import ItemListContainer from "./components/ItemList/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer"
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="container">
      {/* Navbar */}
      <NavbarContainer />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
};

export default App