import { useCartContext } from "../context/CartContext";
import { Offcanvas, Stack } from "react-bootstrap";
import CartItem from "./CartItem";
type CartProps = {
  isOpen: boolean;
};

import productItems from "../data/products.json";
const Cart = ({ isOpen }: CartProps) => {
  const { closeCart, cartItems } = useCartContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </Stack>
        <div className="fw-bold fs-5 text-dark">
          Total : {""}
          {cartItems.reduce((total, currentItem) => {
            const product = productItems.find(
              (item) => item.id === currentItem.id
            );
            return total + (product?.price || 0) *  currentItem.qty
          } , 0)}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Cart;
