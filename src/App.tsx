import { Routes, Route } from "react-router-dom";
import { About, Home, Shop } from "./pages";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </CartProvider>
    </>
  );
};

export default App;
