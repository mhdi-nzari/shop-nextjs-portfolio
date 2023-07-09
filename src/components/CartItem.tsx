import { useCartContext } from "../context/CartContext";
import prodctItem from "../data/products.json";
import { Stack } from "react-bootstrap";

type CartItemProps = {
  id: number;
  qty: number;
};

const CartItem = ({ id, qty }: CartItemProps) => {
  const { removeItem } = useCartContext();
  const product = prodctItem.find((item) => item.id === id);

  if (product === null) return null;

  return (
    <Stack direction="horizontal" gap={2} class>
      <img
        src={product?.imgUrl}
        alt={product?.title}
        style={{ width: "125px", height: "125px", objectFit: "cover" }}
      />

    </Stack>
  );
};

export default CartItem;
