import React from "react";
import { useCartContext } from "../context/CartContext";
import { Offcanvas } from "react-bootstrap";
type CartProps = {
  isOpen: boolean;
};

const Cart = ({ isOpen }: CartProps) => {
  const { closeCart } = useCartContext();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default Cart;
